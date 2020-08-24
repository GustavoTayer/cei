import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaEquipeComponent } from './lista-equipe.component';

const routes: Routes = [{ path: '', component: ListaEquipeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaEquipeRoutingModule { }
