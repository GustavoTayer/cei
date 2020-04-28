import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-dialog-show-sol-mobile',
  templateUrl: './dialog-show-sol-mobile.component.html',
  styleUrls: ['./dialog-show-sol-mobile.component.scss'],
})
export class DialogShowSolMobileComponent implements OnInit {

  constructor(protected ref: NbDialogRef<DialogShowSolMobileComponent>) {}

  ngOnInit():  void {}

  cancel() {
    this.ref.close(false);
  }

  submit() {
    this.ref.close(true);
  }

}
