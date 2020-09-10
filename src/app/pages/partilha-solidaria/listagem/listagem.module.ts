import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListagemRoutingModule } from './listagem-routing.module';
import { ListagemComponent } from './listagem.component';
import { NbListModule, NbCardModule, NbButtonModule, NbIconModule, NbTooltipModule, NbSpinnerModule } from '@nebular/theme';


@NgModule({
  declarations: [ListagemComponent],
  imports: [
    CommonModule,
    ListagemRoutingModule,
    NbListModule,
    NbCardModule,
    NbButtonModule,
    NbSpinnerModule,
    NbIconModule,
    NbTooltipModule,
  ],
})
export class ListagemModule { }
