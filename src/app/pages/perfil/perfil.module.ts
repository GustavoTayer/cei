import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import {
  NbInputModule,
  NbCardModule,
  NbIconModule,
  NbSelectModule,
  NbToggleModule,
  NbButtonModule, NbDatepickerModule, NbCheckboxModule } from '@nebular/theme';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NbMomentDateModule } from '@nebular/moment';


@NgModule({
  declarations: [PerfilComponent],
  imports: [
    CommonModule,
    PerfilRoutingModule,
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
    NbCheckboxModule,
  ],
})
export class PerfilModule { }
