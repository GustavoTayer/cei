import { Component, OnInit, Input } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';

@Component({
  selector: 'ngx-product-select',
  templateUrl: './product-select.component.html',
  styleUrls: ['./product-select.component.scss'],
})
export class ProductSelectComponent  extends DefaultEditor {
  constructor() {
    super();
  }
}
