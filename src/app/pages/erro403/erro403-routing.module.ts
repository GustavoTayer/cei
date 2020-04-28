import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Erro403Component } from './erro403.component';

const routes: Routes = [{ path: '', component: Erro403Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Erro403RoutingModule { }
