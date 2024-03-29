import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarSolicitacaoComponent } from './criar-solicitacao.component';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbInputModule, NbButtonModule, NbListModule,
  NbSelectModule, NbIconModule, NbDatepickerModule } from '@nebular/theme';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ProductSelectComponent } from '../../util/product-select/product-select.component';
import { ProductSelectModule } from '../../util/product-select/product-select.module';
import {NbDateFnsDateModule} from '@nebular/date-fns';

@NgModule({
  declarations: [CriarSolicitacaoComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    ReactiveFormsModule,
    FormsModule,
    NbListModule,
    NbIconModule,
    NbSelectModule,
    Ng2SmartTableModule,
    ProductSelectModule,
    NbDatepickerModule,
    NbDateFnsDateModule.forChild({
      format: 'dd/MM/yyyy',
    }),
    RouterModule.forChild([
      {
        path: '',
        component: CriarSolicitacaoComponent,
      },
    ]),
  ],
  entryComponents: [ProductSelectComponent],
})
export class CriarSolicitacaoModule { }
