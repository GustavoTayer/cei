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
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { DndDirective } from './dnd.directive';


@NgModule({
  declarations: [PerfilComponent, DndDirective],
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
    NbDateFnsDateModule,
    NbCheckboxModule,
  ],
  exports: [DndDirective],
})
export class PerfilModule { }
