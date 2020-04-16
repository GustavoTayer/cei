import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarProdutoComponent } from './criar-produto.component';
import { NbCardModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxCurrencyModule } from 'ngx-currency';
export const customCurrencyMaskConfig = {
  align: 'right',
  allowNegative: true,
  allowZero: true,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.',
  nullable: true,
};

@NgModule({
  declarations: [CriarProdutoComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    RouterModule.forChild([
      {
        path: ':id',
        component: CriarProdutoComponent,
      },
    ]),
  ],
})
export class CriarProdutoModule { }
