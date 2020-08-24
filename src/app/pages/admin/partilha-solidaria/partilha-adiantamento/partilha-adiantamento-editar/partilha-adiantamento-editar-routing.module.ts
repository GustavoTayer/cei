import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartilhaAdiantamentoEditarComponent } from './partilha-adiantamento-editar.component';

const routes: Routes = [{ path: '', component: PartilhaAdiantamentoEditarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartilhaAdiantamentoEditarRoutingModule { }
