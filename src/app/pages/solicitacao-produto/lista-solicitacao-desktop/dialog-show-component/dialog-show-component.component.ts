import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-dialog-show-component',
  templateUrl: './dialog-show-component.component.html',
  styleUrls: ['./dialog-show-component.component.scss'],
})
export class DialogShowComponentComponent implements OnInit {

  constructor(protected ref: NbDialogRef<DialogShowComponentComponent>) {}

  ngOnInit():  void {}

  cancel() {
    this.ref.close(false);
  }

  submit() {
    this.ref.close(true);
  }

}
