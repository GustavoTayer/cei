import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SolicitacaoGuard } from './solicitacao.guard';
import { RelatorioGuard } from './relatorio.guard';

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
            canActivate: [SolicitacaoGuard],
            loadChildren: () => import('./solicitacoes-lista/solicitacoes-lista.module')
            .then(m => m.SolicitacoesListaModule),
          },
          {
            path: 'relatorio',
            canActivate: [RelatorioGuard],
            loadChildren: () => import('./solicitacoes-relatorio/solicitacoes-relatorio.module')
            .then(m => m.SolicitacoesRelatorioModule),
          },
        ],
      },
    ]),
  ],
})
export class SolicitacoesModule { }
