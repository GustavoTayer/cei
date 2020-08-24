import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaEquipeRoutingModule } from './lista-equipe-routing.module';
import { ListaEquipeComponent } from './lista-equipe.component';
import { NbCardModule, NbListModule, NbIconModule, NbButtonModule } from '@nebular/theme';


@NgModule({
  declarations: [ListaEquipeComponent],
  imports: [
    CommonModule,
    ListaEquipeRoutingModule,
    NbCardModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
  ],
})
export class ListaEquipeModule { }
