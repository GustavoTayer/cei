import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioConvidarComponent } from './usuario-convidar.component';

const routes: Routes = [{ path: '', component: UsuarioConvidarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioConvidarRoutingModule { }
