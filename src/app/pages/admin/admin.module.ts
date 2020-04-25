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
            path: 'produto',
            loadChildren: () => import('./produto/produto.module')
            .then(m => m.ProdutoModule),
          },
          {
            path: 'solicitacoes',
            loadChildren: () => import('./solicitacoes/solicitacoes.module')
            .then(m => m.SolicitacoesModule),
          },
          {
            path: 'usuarios',
            loadChildren: () => import('./usario/usario.module')
              .then(m => m.UsarioModule),
          },
        ],
      },
    ]),
  ],
})
export class AdminModule { }
