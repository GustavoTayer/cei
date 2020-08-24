import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'lista',
      loadChildren: () => import('./partilha-adiantamento-lista/partilha-adiantamento-lista.module')
        .then(m => m.PartilhaAdiantamentoListaModule),
    },
    {
      path: 'editar',
      loadChildren: () => import('./partilha-adiantamento-editar/partilha-adiantamento-editar.module')
        .then(m => m.PartilhaAdiantamentoEditarModule),
    },
  ],
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartilhaAdiantamentoRoutingModule { }
