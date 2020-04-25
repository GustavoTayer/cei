import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-dialog-showcase',
  templateUrl: './dialog-showcase.component.html',
  styleUrls: ['./dialog-showcase.component.scss'],
})
export class DialogShowcaseComponent implements OnInit {

  constructor(protected ref: NbDialogRef<DialogShowcaseComponent>) {}
  ngOnInit():  void {
  }
  cancel() {
    this.ref.close(false);
  }

  submit() {
    this.ref.close(true);
  }
}
