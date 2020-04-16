import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitacoesListaComponent } from './solicitacoes-lista/solicitacoes-lista.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SolicitacoesListaComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: () => import('./solicitacoes-lista/solicitacoes-lista.module')
            .then(m => m.SolicitacoesListaModule),
          },
        ],
      },
    ]),
  ],
})
export class SolicitacoesModule { }
