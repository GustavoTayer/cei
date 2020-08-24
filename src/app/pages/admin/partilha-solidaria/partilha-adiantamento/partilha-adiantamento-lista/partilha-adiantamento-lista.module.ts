import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartilhaAdiantamentoListaRoutingModule } from './partilha-adiantamento-lista-routing.module';
import { PartilhaAdiantamentoListaComponent } from './partilha-adiantamento-lista.component';
import { NbCardModule, NbButtonModule, NbInputModule, NbSelectModule, NbDatepickerModule } from '@nebular/theme';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { ReactiveFormsModule,  FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PartilhaAdiantamentoListaComponent],
  imports: [
    CommonModule,
    PartilhaAdiantamentoListaRoutingModule,
    NbCardModule,
    // NbIconModule,
    NbInputModule,
    NbSelectModule,
    NbButtonModule,
    NbDatepickerModule,
    NbDateFnsDateModule,
    ReactiveFormsModule,
    FormsModule,

  ],
})
export class PartilhaAdiantamentoListaModule { }
