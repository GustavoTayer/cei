import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartilhaPassagemComponent } from './partilha-passagem.component';

const routes: Routes = [{ path: '', component: PartilhaPassagemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartilhaPassagemRoutingModule { }
