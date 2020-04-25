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
            loadChildren: () => import('./usuario-lista/usuario-lista.module')
            .then(m => m.UsuarioListaModule),
          },
          {
            path: 'convidar',
            loadChildren: () => import('./usuario-convidar/usuario-convidar.module')
            .then(m => m.UsuarioConvidarModule),
          },
          {
            path: 'editar',
            loadChildren: () => import('./usuario-editar/usuario-editar.module')
            .then(m => m.UsuarioEditarModule),
          },
        ],
      },
    ]),
  ]
})
export class UsarioModule { }
