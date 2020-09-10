import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProdutosComponent } from './lista-produtos.component';
import { NbCardModule, NbListModule, NbButtonModule, NbIconModule, NbSpinnerModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [ListaProdutosComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule,
    NbSpinnerModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListaProdutosComponent,
      },
    ]),
  ],
})
export class ListaProdutosModule { }
