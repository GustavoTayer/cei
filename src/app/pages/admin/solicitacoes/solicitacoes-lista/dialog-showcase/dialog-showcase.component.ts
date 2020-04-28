import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { EStatusSolicitacao } from '../../../../../models/DbModels';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-dialog-showcase',
  templateUrl: './dialog-showcase.component.html',
  styleUrls: ['./dialog-showcase.component.scss'],
})
export class DialogShowcaseComponent implements OnInit {
  @Input() status: EStatusSolicitacao;
  constructor(protected ref: NbDialogRef<DialogShowcaseComponent>) {}
  cancelado = new FormControl(false);
  justificativa = new FormControl('');
  cancelamento: boolean;

  ngOnInit():  void {
    this.cancelamento = this.status === EStatusSolicitacao.SLC_CANCELAMENTO;
  }

  cancel() {
    this.ref.close({submit: false});
  }

  submit() {
    this.ref.close({
      submit: true,
      cancelamento: {
        cancelado: this.cancelado.value,
        justificativa: this.justificativa.value,
      },
    });
  }
}
