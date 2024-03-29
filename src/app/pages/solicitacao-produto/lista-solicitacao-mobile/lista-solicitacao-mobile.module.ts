import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaSolicitacaoMobileComponent } from './lista-solicitacao-mobile.component';
import {
  NbListModule,
  NbCardModule,
  NbButtonModule,
  NbInputModule,
  NbDatepickerModule,
  NbSelectModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogShowSolMobileComponent } from './dialog-show-sol-mobile/dialog-show-sol-mobile.component';


@NgModule({
  declarations: [ListaSolicitacaoMobileComponent, DialogShowSolMobileComponent],
  entryComponents: [DialogShowSolMobileComponent],
  imports: [
    CommonModule,
    NbListModule,
    NbCardModule,
    CommonModule,
    NbCardModule,
    ReactiveFormsModule,
    FormsModule,
    NbButtonModule,
    NbInputModule,
    RouterModule,
    NbDatepickerModule,
    NbDateFnsDateModule,
    FontAwesomeModule,
    NbSelectModule,
    NbSpinnerModule,
  ],
  exports: [ListaSolicitacaoMobileComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListaSolicitacaoMobileModule { }
