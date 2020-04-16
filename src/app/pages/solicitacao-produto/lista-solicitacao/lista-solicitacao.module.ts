import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaSolicitacaoComponent } from './lista-solicitacao.component';
import { ListaSolicitacaoMobileModule } from '../lista-solicitacao-mobile/lista-solicitacao-mobile.module';
import { ListaSolicitacaoDesktopModule } from '../lista-solicitacao-desktop/lista-solicitacao-desktop.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListaSolicitacaoComponent],
  imports: [
    CommonModule,
    ListaSolicitacaoMobileModule,
    ListaSolicitacaoDesktopModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListaSolicitacaoComponent,
      },
    ]),
  ],
})
export class ListaSolicitacaoModule { }
