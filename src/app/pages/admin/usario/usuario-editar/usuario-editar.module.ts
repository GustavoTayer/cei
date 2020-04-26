import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioEditarRoutingModule } from './usuario-editar-routing.module';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbInputModule,
  NbSelectModule, NbToggleModule, NbDatepickerModule,
  NbButtonModule, NbIconModule } from '@nebular/theme';
import { NbMomentDateModule } from '@nebular/moment';


@NgModule({
  declarations: [UsuarioEditarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbSelectModule,
    NbToggleModule,
    NbButtonModule,
    NbDatepickerModule,
    NbMomentDateModule,
    UsuarioEditarRoutingModule,
  ],
})
export class UsuarioEditarModule { }