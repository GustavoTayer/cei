import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaSolicitacaoDesktopComponent } from './lista-solicitacao-desktop.component';
import { NbTreeGridModule, NbCardModule, NbButtonModule, NbInputModule, NbDatepickerModule, NbSelectModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbMomentDateModule } from '@nebular/moment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogShowComponentComponent } from './dialog-show-component/dialog-show-component.component';

@NgModule({
  declarations: [ListaSolicitacaoDesktopComponent, DialogShowComponentComponent],
  entryComponents: [DialogShowComponentComponent],
  imports: [
    CommonModule,
    NbTreeGridModule,
    NbCardModule,
    ReactiveFormsModule,
    FormsModule,
    NbButtonModule,
    NbInputModule,
    RouterModule,
    NbDatepickerModule,
    NbMomentDateModule,
    FontAwesomeModule,
    NbSelectModule,
  ],
  exports: [ListaSolicitacaoDesktopComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListaSolicitacaoDesktopModule { }
