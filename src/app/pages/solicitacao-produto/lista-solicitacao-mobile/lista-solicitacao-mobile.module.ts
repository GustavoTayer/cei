import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaSolicitacaoMobileComponent } from './lista-solicitacao-mobile.component';
import { NbListModule, NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [ListaSolicitacaoMobileComponent],
  imports: [
    CommonModule,
    NbListModule,
    NbCardModule,
  ],
  exports: [ListaSolicitacaoMobileComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListaSolicitacaoMobileModule { }
