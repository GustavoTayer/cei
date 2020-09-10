import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaEquipeRoutingModule } from './lista-equipe-routing.module';
import { ListaEquipeComponent } from './lista-equipe.component';
import { NbCardModule, NbListModule, NbIconModule, NbButtonModule, NbSpinnerModule } from '@nebular/theme';


@NgModule({
  declarations: [ListaEquipeComponent],
  imports: [
    CommonModule,
    ListaEquipeRoutingModule,
    NbCardModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NbSpinnerModule,
  ],
})
export class ListaEquipeModule { }
