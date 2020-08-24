import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { obterMes, todosMeses } from '../../../../util/utils';
import { startOfMonth, endOfMonth, format } from 'date-fns';
import { IAdiantamento } from '../../../../../models/DbModels';
import { PartilhaSolidariaService } from '../../../../partilha-solidaria/partilha-solidaria.service';

@Component({
  selector: 'ngx-partilha-adiantamento-lista',
  templateUrl: './partilha-adiantamento-lista.component.html',
  styleUrls: ['./partilha-adiantamento-lista.component.scss']
})
export class PartilhaAdiantamentoListaComponent implements OnInit {
  meses = todosMeses;

  adiantamentos: IAdiantamento[]  = [];
  form = this.fb.group({
    usuario: null,
    dataDe: startOfMonth(new Date()),
    dataAte: endOfMonth(new Date()),
  });
  constructor(private fb: FormBuilder,
    private partilhaService: PartilhaSolidariaService) { }

  ngOnInit(): void {
    this.partilhaService.adiantamentoLista(this.form.value).subscribe(res => {
      console.log(res)
      this.adiantamentos = res;
    })
  }

  buscar() {
    this.partilhaService.adiantamentoLista(this.form.value).subscribe(res => {
      this.adiantamentos = res;
    });
  }

  formataData(data) {
    return data ? format(new Date(data), 'dd/MM/yyyy') : '-';
  }

  obterStatusCard(depositado: boolean) {
    return depositado ? 'success' : 'danger';
  }
}