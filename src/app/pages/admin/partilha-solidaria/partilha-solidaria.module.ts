import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: () => import('./partilha-lista/partilha-lista.module')
            .then(m => m.PartilhaListaModule),
          },
          {
            path: 'passagem',
            loadChildren: () => import('./partilha-passagem/partilha-passagem.module')
            .then(m => m.PartilhaPassagemModule),
          },
          {
            path: 'adiantamento',
            loadChildren: () => import('./partilha-adiantamento/partilha-adiantamento.module')
            .then(m => m.PartilhaAdiantamentoModule),
          },
        ],
      },
    ]),
  ]
})
export class PartilhaSolidariaModule { }
