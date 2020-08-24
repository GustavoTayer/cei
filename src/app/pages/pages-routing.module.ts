import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    { path: '403', loadChildren: () => import('./erro403/erro403.module').then(m => m.Erro403Module) },
    {
      path: 'solicitacao-produto',
      loadChildren: () => import('./solicitacao-produto/solicitacao-produto.module')
        .then(m => m.SolicitacaoProdutoModule),
    },
    {
      path: 'partilha-solidaria',
      loadChildren: () => import('./partilha-solidaria/partilha-solidaria.module')
        .then(m => m.PartilhaSolidariaModule),
    },
    {
      path: 'escalas',
      loadChildren: () => import('./escala/escala.module')
        .then(m => m.EscalaModule),
    },
    {
      path: 'perfil',
      loadChildren: () => import('./perfil/perfil.module')
        .then(m => m.PerfilModule) },
    {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module')
        .then(m => m.AdminModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
