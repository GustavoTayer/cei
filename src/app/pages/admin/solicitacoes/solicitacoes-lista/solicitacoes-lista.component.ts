import { Component, OnInit } from '@angular/core';
import {
  NbSortDirection,
  NbTreeGridDataSource,
  NbSortRequest,
  NbTreeGridDataSourceBuilder,
  NbToastrService, NbDialogService } from '@nebular/theme';
import { FormBuilder } from '@angular/forms';
import { EStatusSolicitacao, IProdutoCount } from '../../../../models/DbModels';
import * as moment from 'moment';
import { SolicitacaoProdutoService } from '../../../solicitacao-produto/solicitacao-produto.service';
import {
  faExchangeAlt, faSearch,
  faAngleRight, faAngleLeft,
  faAngleDoubleLeft, faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';
import { DialogShowcaseComponent } from './dialog-showcase/dialog-showcase.component';
import { ActivatedRoute } from '@angular/router';

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
  selector: 'ngx-solicitacoes-lista',
  templateUrl: './solicitacoes-lista.component.html',
  styleUrls: ['./solicitacoes-lista.component.scss'],
})
export class SolicitacoesListaComponent implements OnInit {
  customColumn = 'nome';
  defaultColumns = [];
  allColumns = ['action', 'nome', 'uq', 'valor', 'dataDesejada' ];
  dataSource: NbTreeGridDataSource<any>;
  data: TreeNode<any>[];
  sortColumn: string;
  faSearch = faSearch;
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  faAngleDoubleLeft = faAngleDoubleLeft;
  faAngleDoubleRight = faAngleDoubleRight;
  countSolicitacoes: number;
  nPerPage = 10;
  nOfPages: number;
  pageNumber: number = 1;
  filtroStatus = 'ABERTO';
  usuarios;
  faExchangeAlt = faExchangeAlt;
  status = Object.keys(EStatusSolicitacao).map(it => ({k: it, v: EStatusSolicitacao[it]}));
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  filtro = this.fb.group({
    dataCriacao: null,
    dataDesejada: null,
    status: null,
    usuario: null,
  });
  produtosCount: IProdutoCount[];

  async ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        const start = moment().startOf('week');
        const end = moment().endOf('week');
        if (params && Object.keys(params).length) {
          const {dtDjEnd, dtDjStart, status, usuario} = params;
          this.filtro.patchValue({
            status: status,
            dataDesejada: {start: moment(dtDjStart), end:  moment(dtDjEnd)},
            usuario,
          });
          this.filtroStatus = status;
        } else {
          this.filtro.patchValue({
            status: 'ABERTO',
            dataDesejada: {start, end},
            usuario: '',
          });
        }
        this.solicitacaoProdutoService.buscarSolicitacoesGeral(this.filtro.value, this.pageNumber, this.nPerPage)
            .subscribe(res => {
              this.setData(res.solicitacoes);
              this.setLastPageAndCount(res.count);
            });
          this.solicitacaoProdutoService.countProdutos(this.filtro.value).subscribe(res => this.produtosCount = res);
      });

    this.solicitacaoProdutoService.usuariosSelect().subscribe(res => this.usuarios = res);

  }

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>,
    private solicitacaoProdutoService: SolicitacaoProdutoService,
    private fb: FormBuilder,
    private toastrservice: NbToastrService,
    private dialogService: NbDialogService,
    private route: ActivatedRoute) {}


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
      return {
        data: {
          _id: sol._id,
          nome: sol.usuario.name,
          uq: EStatusSolicitacao[sol.status],
          valor: `R$ ${sol.valorTotal.toFixed(2)}`,
          dataDesejada,
        },
        children,
      };
    });
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  buscar() {
    this.solicitacaoProdutoService.buscarSolicitacoesGeral(this.filtro.value, this.pageNumber, this.nPerPage)
      .subscribe(res => {
        this.setData(res.solicitacoes);
        this.setLastPageAndCount(res.count);
      });
    this.solicitacaoProdutoService.countProdutos(this.filtro.value)
      .subscribe(res => this.produtosCount = res);
    this.filtroStatus = this.filtro.value.status;
    this.checkeds.clear();
  }

  mudarPagina(pagina: number) {
    this.pageNumber = pagina;
    this.solicitacaoProdutoService.buscarSolicitacoes(this.filtro.value, this.pageNumber, this.nPerPage)
      .subscribe(res => {
        this.setData(res.solicitacoes);
        this.setLastPageAndCount(res.count);
      });
  }

  setLastPageAndCount(count: number) {
    this.countSolicitacoes = count;
    this.nOfPages = Math.ceil(count /  this.nPerPage);
  }


  alterarStatusTodos() {
    this.alterarStatus(this.data.map(sol => sol.data._id));
  }

  alterarStatusSelecionados() {
    this.alterarStatus(Array.from(this.checkeds));
  }

  private alterarStatus(ids: any[]) {

      this.dialogService.open(DialogShowcaseComponent, {
       context: {
         status: EStatusSolicitacao[this.filtroStatus],
       },
     }).onClose.subscribe(name => {
          if (name.submit) {
            this.solicitacaoProdutoService.alterarStatus(ids, this.filtro.value.status, name.cancelamento)
              .subscribe(res => {
                this.toastrservice.success('', 'Status das solicitações foram alterados com sucesso');
                this.buscar();
              });
          }
        });
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  checkeds = new Set();

  toggle(checked: boolean, row) {
    if (checked) {
      this.checkeds.add(row.data._id);
    } else {
      this.checkeds.delete(row.data._id);
    }
  }

  isChecked(row) {
    return this.checkeds.has(row.data._id);
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
