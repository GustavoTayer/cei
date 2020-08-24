import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'lista',
        loadChildren: () => import('./lista-equipe/lista-equipe.module')
          .then(m => m.ListaEquipeModule),
      },
      {
        path: 'editar',
        loadChildren: () => import('./editar-equipe/editar-equipe.module')
          .then(m => m.EditarEquipeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipeRoutingModule { }
