import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioListaRoutingModule } from './usuario-lista-routing.module';
import { UsuarioListaComponent } from './usuario-lista.component';
import { NbCardModule, NbListModule, NbUserModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsuarioListaComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    NbUserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    NbButtonModule,
    NbInputModule,
    UsuarioListaRoutingModule,
  ],
})
export class UsuarioListaModule { }
