import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      children: [
        {
          path: 'lista',
          loadChildren: () => import('./listagem/listagem.module')
            .then(m => m.ListagemModule),
        },
        {
          path: 'editar',
          loadChildren: () => import('./editar/editar.module')
            .then(m => m.EditarModule),
        },
      ],
    }]),
  ],
})
export class PartilhaSolidariaModule { }
