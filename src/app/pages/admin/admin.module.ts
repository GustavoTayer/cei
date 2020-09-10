import { PartilhaGuard } from './partilha-solidaria/partilha.guard';
import { AuthGuard } from './../../auth/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, CanActivate } from '@angular/router';

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
          {
            path: 'equipe',
            loadChildren: () => import('./equipe/equipe.module')
              .then(m => m.EquipeModule),
          },
          {
            path: 'partilha',
            canActivate: [PartilhaGuard],
            loadChildren: () => import('./partilha-solidaria/partilha-solidaria.module')
              .then(m => m.PartilhaSolidariaModule),
          },
        ],
      },
    ]),
  ],
})
export class AdminModule { }
