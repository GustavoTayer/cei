import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SolicitacaoProdutoService } from '../solicitacao-produto.service';
import { EStatusSolicitacao } from '../../../models/DbModels';
import { faSearch, faPlus, faAngleRight, faAngleLeft, faAngleDoubleLeft, faAngleDoubleRight  } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';

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
  status = Object.values(EStatusSolicitacao);
  countSolicitacoes: number;
  nPerPage = 10;
  nOfPages: number;
  revealed = false;
  pageNumber: number = 1;
  solicitacaoFlipada;
  constructor (
    private fb: FormBuilder,
    private solicitacaoProdutoService: SolicitacaoProdutoService,
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
      status: EStatusSolicitacao.ABERTO,
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
}
