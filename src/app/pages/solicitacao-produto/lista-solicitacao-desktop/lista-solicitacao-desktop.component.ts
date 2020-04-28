import { Component, OnInit } from '@angular/core';
import { NbSortDirection, NbTreeGridDataSource,
  NbSortRequest, NbTreeGridDataSourceBuilder,
   NbToastrService, NbDialogService,
  } from '@nebular/theme';
import { SolicitacaoProdutoService } from '../solicitacao-produto.service';
import { FormBuilder } from '@angular/forms';
import { EStatusSolicitacao } from '../../../models/DbModels';
import * as moment from 'moment';
import {
    faSearch, faPlus,
    faAngleRight, faAngleLeft,
    faAngleDoubleLeft, faAngleDoubleRight,
    faTrash,
  } from '@fortawesome/free-solid-svg-icons';
import { DialogShowComponentComponent } from './dialog-show-component/dialog-show-component.component';

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
  allColumns = [ 'nome', 'uq', 'valor', 'dataDesejada', 'cancelar' ];
  dataSource: NbTreeGridDataSource<any>;
  data: TreeNode<any>[];
  sortColumn: string;
  status = Object.keys(EStatusSolicitacao).map(it => ({k: it, v: EStatusSolicitacao[it]}));

  sortDirection: NbSortDirection = NbSortDirection.NONE;
  filtro = this.fb.group({
    dataCriacao: null,
    dataDesejada: null,
    status: null,
  });
  faSearch = faSearch;
  faPlus = faPlus;
  faTrash = faTrash;
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  faAngleDoubleLeft = faAngleDoubleLeft;
  faAngleDoubleRight = faAngleDoubleRight;
  countSolicitacoes: number;
  nPerPage = 10;
  nOfPages: number;
  pageNumber: number = 1;
  async ngOnInit() {
    const start = moment().startOf('month');
    const end = moment().endOf('month');
    this.filtro.patchValue({
      status: 'ABERTO',
      dataCriacao: {start, end},
      dataDesejada: {start, end},
    });
    this.solicitacaoProdutoService.buscarSolicitacoes(this.filtro.value, 1, this.nPerPage)
      .subscribe(res => {
        this.setData(res.solicitacoes);
        this.setLastPageAndCount(res.count);
      });
  }

  setLastPageAndCount(count: number) {
    this.countSolicitacoes = count;
    this.nOfPages = Math.ceil(count /  this.nPerPage);
  }

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>,
    private solicitacaoProdutoService: SolicitacaoProdutoService,
    private fb: FormBuilder,
    private toastrService: NbToastrService,
    private dialogService: NbDialogService,
   ) {}

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
          _id: sol._id,
          nome: EStatusSolicitacao[sol.status],
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
    this.solicitacaoProdutoService.buscarSolicitacoes(this.filtro.value, 1, this.nPerPage)
      .subscribe(res => {
        this.setData(res.solicitacoes);
        this.setLastPageAndCount(res.count);
        this.pageNumber = 1;
      });
  }

  cancelar(id) {
    this.solicitacaoProdutoService.cancelar(id)
      .subscribe(res => {
        this.toastrService.info( 'Favor, aguarde aprovação do responsável', 'Solicitação de cancelamento enviada', {
          duration: 6000,
        });
        this.buscar();
      });
  }

  mudarPagina(pagina: number) {
    this.pageNumber = pagina;
    this.solicitacaoProdutoService.buscarSolicitacoes(this.filtro.value, this.pageNumber, this.nPerPage)
      .subscribe(res => {
        this.setData(res.solicitacoes);
        this.setLastPageAndCount(res.count);
      });
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

  alterarStatus(id) {
    this.dialogService.open(DialogShowComponentComponent).onClose.subscribe(name => {
      if (name) {
        this.cancelar(id);
      }
    });
  }
}
