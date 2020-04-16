import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SolicitacoesListaComponent } from './solicitacoes-lista.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SolicitacoesListaComponent,
      },
    ]),
  ]
})
export class SolicitacoesListaModule { }
