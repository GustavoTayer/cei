import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
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
