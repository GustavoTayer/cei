import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EFrequencia } from './produtos-graf-linha/produtos-graf-linha.component';
import { differenceInDays, startOfWeek, startOfMonth, startOfYear, endOfMonth, endOfWeek, endOfYear, subYears } from 'date-fns';
import { SolicitacaoProdutoService } from '../../../solicitacao-produto/solicitacao-produto.service';
// import { SolicitacaoProdutoService } from '../../../solicitacao-produto/solicitacao-produto.service';

window.echarts = require('echarts/dist/echarts.js');
@Component({
  selector: 'ngx-solicitacoes-relatorio',
  templateUrl: './solicitacoes-relatorio.component.html',
  styleUrls: ['./solicitacoes-relatorio.component.scss'],
})
export class SolicitacoesRelatorioComponent implements OnInit {
  frequencia = new FormControl(EFrequencia.diario);
  periodo = new FormControl();
  end = new FormControl();
  solicitacoesPagasRel;
  relProd;
  solicitacoesOutrasRel;
  relSeminaristas;
  relSeminaristasFreq = 'mes';
  infosFiltro: {frequencia: EFrequencia, start: Date, end: Date} = {
    frequencia: EFrequencia.diario,
    start: startOfWeek(new Date()),
    end: endOfWeek(new Date()),
  };
  constructor(private solicitacaoService: SolicitacaoProdutoService) { }
  ngOnInit() {
    const start = startOfWeek(new Date());
    const end = endOfWeek(new Date());
    this.periodo.patchValue(start);
    this.end.patchValue(end);
    this.solicitacaoService.relatorio('mes')
      .subscribe(res => this.relSeminaristas = res);
    this.solicitacaoService.relProd(EFrequencia.diario, start, end)
      .subscribe(res => {
        this.relProd = res;
      });
    this.solicitacaoService.solicitacoesPagasRel(EFrequencia.diario, start, end)
      .subscribe(res => {
        this.solicitacoesPagasRel = res;
      });
    this.solicitacaoService.solicitacoesOutrasRel(EFrequencia.diario, start, end)
      .subscribe(res => {
        this.solicitacoesOutrasRel = res;
      });
    this.frequencia.valueChanges.subscribe( value => this.alterarFrequencia(value));
    this.periodo.valueChanges.subscribe( value => {
      const cf = this.controleDeFrequencia();
      if (cf && this.frequencia.value !== cf) {
        this.frequencia.patchValue(cf);
      }
    });
    this.end.valueChanges.subscribe( value => {
      const cf = this.controleDeFrequencia();
      if (cf && this.frequencia.value !== cf) {
        this.frequencia.patchValue(cf);
      }
    });
  }

  alterarFrequencia(value) {
    const cf = this.controleDeFrequencia();
    const date = new Date();
    switch (value) {
      case EFrequencia.diario:
        if (cf !== EFrequencia.diario) {
          this.periodo.patchValue(startOfWeek(date));
          this.end.patchValue(endOfWeek(date));
        }
        break;
      case EFrequencia.semanal:
        if (cf !== EFrequencia.semanal) {
          this.periodo.patchValue(startOfMonth(date));
          this.end.patchValue(endOfMonth(date));
        }
        break;
      case EFrequencia.mensal:
        if (cf !== EFrequencia.mensal) {
          this.periodo.patchValue(startOfYear(date));
          this.end.patchValue(endOfYear(date));
        }
        break;
      case EFrequencia.anual:
        if (cf !== EFrequencia.anual) {
          this.periodo.patchValue(startOfYear(subYears(date, 3)));
          this.end.patchValue(endOfYear(date));
        }
        break;
    }
  }

  controleDeFrequencia(): null | EFrequencia {
    if (this.periodo.value && this.end.value) {
      const days2 = differenceInDays(this.end.value, this.periodo.value);
      if (days2 < 15) {
        return EFrequencia.diario;
      } else if (days2 < 60) {
        return EFrequencia.semanal;
      } else if (days2 > 60 && days2 < 366) {
        return EFrequencia.mensal;
      } else if (days2 > 366) {
        return EFrequencia.anual;
      }
    }
    return null;
  }

  buscar() {
    this.infosFiltro = {
      frequencia: this.frequencia.value,
      start: this.periodo.value,
      end: this.end.value,
    };
    this.solicitacaoService
      .relProd(this.frequencia.value, this.periodo.value, this.end.value )
      .subscribe(res => {
        this.relProd = res;
      });
    this.solicitacaoService.solicitacoesPagasRel(this.frequencia.value, this.periodo.value, this.end.value)
      .subscribe(res => {
        this.solicitacoesPagasRel = res;
      });
    this.solicitacaoService.solicitacoesOutrasRel(this.frequencia.value, this.periodo.value, this.end.value)
      .subscribe(res => {
        this.solicitacoesOutrasRel = res;
      });
  }
}
