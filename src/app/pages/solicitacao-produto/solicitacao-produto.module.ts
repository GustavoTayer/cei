import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: () => import('./lista-solicitacao/lista-solicitacao.module')
              .then(m => m.ListaSolicitacaoModule),
          },
          {
            path: 'solicitar',
            loadChildren: () => import('./criar-solicitacao/criar-solicitacao.module')
              .then(m => m.CriarSolicitacaoModule),
          },
        ],
      },
    ]),
  ],
})
export class SolicitacaoProdutoModule { }
