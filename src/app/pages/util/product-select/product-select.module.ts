import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSelectComponent } from './product-select.component';
import { NbSelectModule, NbInputModule } from '@nebular/theme';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductSelectComponent],
  imports: [
    CommonModule,
    NbSelectModule,
    ReactiveFormsModule,
    FormsModule,
    NbInputModule,
  ],
  exports: [ProductSelectComponent],
})
export class ProductSelectModule { }
