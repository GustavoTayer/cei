import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarEquipeComponent } from './editar-equipe.component';

const routes: Routes = [{ path: ':id', component: EditarEquipeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarEquipeRoutingModule { }
