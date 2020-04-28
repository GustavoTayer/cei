import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Erro403RoutingModule } from './erro403-routing.module';
import { Erro403Component } from './erro403.component';
import { NbCardModule, NbButtonModule } from '@nebular/theme';


@NgModule({
  declarations: [Erro403Component],
  imports: [
    CommonModule,
    Erro403RoutingModule,
    NbCardModule,
    NbButtonModule,
  ],
})
export class Erro403Module { }
