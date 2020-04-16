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
            loadChildren: () => import('./lista-produtos/lista-produtos.module')
            .then(m => m.ListaProdutosModule),
          },
          {
            path: 'editar',
            loadChildren: () => import('./criar-produto/criar-produto.module')
              .then(m => m.CriarProdutoModule),
          },
        ],
      },
    ]),
  ],
})
export class ProdutoModule { }
