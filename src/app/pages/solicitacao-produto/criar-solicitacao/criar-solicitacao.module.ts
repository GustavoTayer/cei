import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarSolicitacaoComponent } from './criar-solicitacao.component';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbInputModule, NbButtonModule, NbListModule,
  NbSelectModule, NbIconModule, NbDatepickerModule, NbAlertModule } from '@nebular/theme';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ProductSelectComponent } from '../../util/product-select/product-select.component';
import { ProductSelectModule } from '../../util/product-select/product-select.module';
import { NbMomentDateModule } from '@nebular/moment';


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
    NbMomentDateModule,
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
