import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      loadChildren: () => import('./minhas-escalas/minhas-escalas.module')
        .then(m => m.MinhasEscalasModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscalaRoutingModule { }
