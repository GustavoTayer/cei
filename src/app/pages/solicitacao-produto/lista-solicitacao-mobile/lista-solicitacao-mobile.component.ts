import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SolicitacaoProdutoService } from '../solicitacao-produto.service';
import { EStatusSolicitacao } from '../../../models/DbModels';
import { faTrash,
  faSearch, faPlus, faAngleRight, faAngleLeft, faAngleDoubleLeft, faAngleDoubleRight  } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { DialogShowSolMobileComponent } from './dialog-show-sol-mobile/dialog-show-sol-mobile.component';
import { NbDialogService, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-lista-solicitacao-mobile',
  templateUrl: './lista-solicitacao-mobile.component.html',
  styleUrls: ['./lista-solicitacao-mobile.component.scss'],
})
export class ListaSolicitacaoMobileComponent implements OnInit {
  data;
  faSearch = faSearch;
  faPlus = faPlus;
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  faAngleDoubleLeft = faAngleDoubleLeft;
  faAngleDoubleRight = faAngleDoubleRight;
  status = Object.keys(EStatusSolicitacao).map(it => ({k: it, v: EStatusSolicitacao[it]}));
  countSolicitacoes: number;
  nPerPage = 10;
  nOfPages: number;
  revealed = false;
  pageNumber: number = 1;
  solicitacaoFlipada;
  faTrash = faTrash;
  constructor (
    private fb: FormBuilder,
    private solicitacaoProdutoService: SolicitacaoProdutoService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
  ) { }

  filtro = this.fb.group({
    dataCriacao: null,
    dataDesejada: null,
    status: null,
  });

  ngOnInit() {
    const start = moment().startOf('month');
    const end = moment().endOf('month');
    this.filtro.patchValue({
      status: 'ABERTO',
      dataCriacao: {start, end},
      dataDesejada: {start, end},
    });
    this.solicitacaoProdutoService.buscarSolicitacoes(this.filtro.value, 1, this.nPerPage)
      .subscribe(res => {
        this.data = res.solicitacoes;
        this.setLastPageAndCount(res.count);
      });
  }
  toggleView(solicitacao?: any) {
    this.revealed = !this.revealed;
    this.solicitacaoFlipada = solicitacao;
  }
  buscar() {
    this.solicitacaoProdutoService.buscarSolicitacoes(this.filtro.value, 1, this.nPerPage)
      .subscribe(res => {
        this.data = res.solicitacoes;
        this.setLastPageAndCount(res.count);
      });
  }
  formatarData(data) {
    return moment(data).format('DD/MM/YYYY');
  }
  loading = false;

  setLastPageAndCount(count: number) {
    this.countSolicitacoes = count;
    this.nOfPages = Math.ceil(count /  this.nPerPage);
  }
  mudarPagina(pagina: number) {
    this.pageNumber = pagina;
    this.solicitacaoProdutoService.buscarSolicitacoes(this.filtro.value, this.pageNumber, this.nPerPage)
      .subscribe(res => {
        this.data = res.solicitacoes;
        this.setLastPageAndCount(res.count);
      });
  }
  obterValorStatusEnum(status) {
    return EStatusSolicitacao[status];
  }

  alterarStatus(id) {
      this.dialogService.open(DialogShowSolMobileComponent).onClose.subscribe(name => {
        if (name) {
          this.cancelar(id);
        }
      });
  }
  cancelar(id) {
    this.solicitacaoProdutoService.cancelar(id)
      .subscribe(res => {
        this.toastrService.info( 'Favor, aguarde aprovação do responsável',
        'Solicitação de cancelamento enviada',
        {
          duration: 6000,
        });
        this.buscar();
      });
  }
}
