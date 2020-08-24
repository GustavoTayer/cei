import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { EStatusPartilha } from '../../../../../models/DbModels';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-dialog-showcase',
  templateUrl: './dialog-showcase.component.html',
  styleUrls: ['./dialog-showcase.component.scss'],
})
export class DialogShowcaseComponent implements OnInit {
  @Input() status: EStatusPartilha;
  constructor(protected ref: NbDialogRef<DialogShowcaseComponent>) {}
  aprovado = new FormControl(false);
  justificativa = new FormControl('');
  aprovar: boolean;
  deposito: boolean;
  valorDepositado = new FormControl(0);
  dataDeposito = new FormControl(new Date());

  ngOnInit():  void {
    this.aprovar = this.status === EStatusPartilha.EM_ANALISE;
    this.deposito = this.status === EStatusPartilha.APROVADO;
  }

  cancel() {
    this.ref.close({submit: false});
  }

  submit() {
    this.ref.close({
      submit: true,
      aprovacao: {
        aprovado: this.aprovado.value,
        justificativa: this.justificativa.value,
      },
      deposito: {
        valorDepositado: this.valorDepositado.value,
        dataDeposito: this.dataDeposito.value,
      },
    });
  }
}
