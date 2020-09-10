import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioConvidarRoutingModule } from './usuario-convidar-routing.module';
import { UsuarioConvidarComponent } from './usuario-convidar.component';
import { NbCardModule, NbInputModule, NbListModule, NbButtonModule, NbIconModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsuarioConvidarComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbListModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    NbIconModule,
    ReactiveFormsModule,
    FormsModule,
    NbSpinnerModule,
    UsuarioConvidarRoutingModule,
  ],
})
export class UsuarioConvidarModule { }
