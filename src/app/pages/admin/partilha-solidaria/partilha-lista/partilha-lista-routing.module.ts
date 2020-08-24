import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartilhaListaComponent } from './partilha-lista.component';

const routes: Routes = [{ path: '', component: PartilhaListaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartilhaListaRoutingModule { }
