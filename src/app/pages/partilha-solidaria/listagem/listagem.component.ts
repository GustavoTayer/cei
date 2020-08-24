import { Component, OnInit } from '@angular/core';
import { PartilhaSolidariaService } from '../partilha-solidaria.service';
import { format } from 'date-fns';
import { EStatusPartilha } from '../../../models/DbModels';
import { obterMes } from '../../util/utils';
import { UnsubscribeOnDestroyAdapter } from '../../util/UnsubscribeOnDestroyAdapter';

@Component({
  selector: 'ngx-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
  comprovantes;
  constructor(private partilhaService: PartilhaSolidariaService) {
    super();
  }

  ngOnInit(): void {
    this.subs.sink = this.partilhaService.lista().subscribe(res => this.comprovantes = res || []);
  }

  buscar() {
    this.subs.sink = this.partilhaService.lista().subscribe(res => this.comprovantes = res || []);
  }

  formataData(data) {
    return format(new Date(data), 'dd/MM/yyyy');
  }

  obterStatus(status: string) {
    return EStatusPartilha[status];
  }

  mes(mes: number) {
    return obterMes(mes).mes;
  }

  obterStatusCard(status) {
    switch (status) {
      case 'APROVADO':
      case 'DEPOSITADO':
        return 'success';
      case 'CORRECAO':
        return 'danger';
      case 'EM_ANALISE':
        return 'warning';
    }
  }

  correcao(status) {
    return EStatusPartilha[status] === EStatusPartilha.CORRECAO || EStatusPartilha[status] === EStatusPartilha.EM_ANALISE;
  }

  downloadComprovante(comprovante) {
    this.partilhaService.obterArquivoComprovante(comprovante);
  }
}
