import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitacoesRelatorioComponent } from './solicitacoes-relatorio.component';

const routes: Routes = [{ path: '', component: SolicitacoesRelatorioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitacoesRelatorioRoutingModule { }
