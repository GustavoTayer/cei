import { Component, OnInit } from '@angular/core';
import { PartilhaSolidariaService } from '../partilha-solidaria.service';
import { format } from 'date-fns';
import { EStatusPartilha } from '../../../models/DbModels';
import { obterMes } from '../../util/utils';
import { UnsubscribeOnDestroyAdapter } from '../../util/UnsubscribeOnDestroyAdapter';

@Component({
  selector: 'ngx-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
  loadingDownload = {};
  comprovantes;
  loading = false;
  constructor(private partilhaService: PartilhaSolidariaService) {
    super();
  }

  ngOnInit(): void {
    this.loading = true;
    this.subs.sink = this.partilhaService.lista().subscribe(
      res => {
        this.comprovantes = res || [];
        this.comprovantes.forEach(comprovante => {
          this.loadingDownload[comprovante._id] = false;
        });
      },
      (err) => err,
      () => this.loading = false,
      );
  }

  buscar() {
    this.loading = true;
    this.subs.sink = this.partilhaService.lista().subscribe(
      res => this.comprovantes = res || [],
      (err) => err,
      () => this.loading = false,
      );
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
  teste() {
    this.partilhaService.teste().subscribe(res => console.log(res))
  }
  correcao(status) {
    return EStatusPartilha[status] === EStatusPartilha.CORRECAO || EStatusPartilha[status] === EStatusPartilha.EM_ANALISE;
  }
  downloadComprovante(comprovante) {
    this.loadingDownload[comprovante._id] = true;
    this.partilhaService.obterArquivoComprovante(comprovante)
      .subscribe(res => res, err => err, () => this.loadingDownload[comprovante._id] = false);
  }
}
