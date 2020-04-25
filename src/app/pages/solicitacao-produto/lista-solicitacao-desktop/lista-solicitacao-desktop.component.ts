import { Component, OnInit } from '@angular/core';
import { NbSortDirection, NbTreeGridDataSource, NbSortRequest, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { SolicitacaoProdutoService } from '../solicitacao-produto.service';
import { FormBuilder } from '@angular/forms';
import { EStatusSolicitacao } from '../../../models/DbModels';
import * as moment from 'moment';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  name: string;
  size: string;
  kind: string;
  items?: number;
}

@Component({
  selector: 'ngx-lista-solicitacao-desktop',
  templateUrl: './lista-solicitacao-desktop.component.html',
  styleUrls: ['./lista-solicitacao-desktop.component.scss'],
})
export class ListaSolicitacaoDesktopComponent implements OnInit {
  customColumn = 'nome';
  defaultColumns = [];
  allColumns = [ 'nome', 'uq', 'valor', 'dataDesejada' ];
  dataSource: NbTreeGridDataSource<any>;
  data: TreeNode<any>[];
  sortColumn: string;
  status = Object.values(EStatusSolicitacao);
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  filtro = this.fb.group({
    dataCriacao: null,
    dataDesejada: null,
    status: null,
  });
  faSearch = faSearch;
  faPlus = faPlus;

  async ngOnInit() {
    const start = moment().startOf('month');
    const end = moment().endOf('month');
    this.filtro.patchValue({
      status: EStatusSolicitacao.ABERTO,
      dataCriacao: {start, end},
      dataDesejada: {start, end},
    });
    this.solicitacaoProdutoService.buscarSolicitacoes(this.filtro.value).subscribe(res => this.setData(res));
  }

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>,
    private solicitacaoProdutoService: SolicitacaoProdutoService,
    private fb: FormBuilder) {}

  // TODO: pensar em uma solução melhor
  setData(solicitacoes) {
    this.data = solicitacoes.map(sol => {
      const sp = sol.produtos;
      delete sol.produtos;
      const children = sp.map(prod => {
        const nome = prod.produto.nome;
        const uq = prod.quantidade;
        return { data: {
            uq,
            nome,
            valor: `R$ ${prod.valor.toFixed(2)}`,
          },
        };
       });
      const dataDesejada = moment(sol.dataDesejada).format('DD/MM/YYYY');
      const criadoEm = moment(sol.criadoEm).format('DD/MM/YYYY');
      return {
        data: {
          nome: sol.status.charAt(0) + sol.status.slice(1).toLowerCase(),
          uq: dataDesejada,
          valor: `R$ ${sol.valorTotal.toFixed(2)}`,
          criadoEm,
        },
        children,
      };
    });
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  buscar() {
    this.solicitacaoProdutoService.buscarSolicitacoes(this.filtro.value)
      .subscribe(res => this.setData(res));
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
}
