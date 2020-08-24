import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartilhaAdiantamentoListaComponent } from './partilha-adiantamento-lista.component';

const routes: Routes = [{ path: '', component: PartilhaAdiantamentoListaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartilhaAdiantamentoListaRoutingModule { }
