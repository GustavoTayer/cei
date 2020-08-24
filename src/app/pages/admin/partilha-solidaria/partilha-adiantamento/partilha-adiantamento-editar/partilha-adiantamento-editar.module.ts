import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartilhaAdiantamentoEditarRoutingModule } from './partilha-adiantamento-editar-routing.module';
import { PartilhaAdiantamentoEditarComponent } from './partilha-adiantamento-editar.component';
import { NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbButtonModule,
  NbDatepickerModule,
  NbAutocompleteModule,
  NbIconModule,
} from '@nebular/theme';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { customCurrencyMaskConfig } from '../../../produto/criar-produto/criar-produto.module';


@NgModule({
  declarations: [PartilhaAdiantamentoEditarComponent],
  imports: [
    CommonModule,
    PartilhaAdiantamentoEditarRoutingModule,
    NbCardModule,
    // NbIconModule,
    NbInputModule,
    NbSelectModule,
    NbButtonModule,
    NbDatepickerModule,
    NbDateFnsDateModule,
    ReactiveFormsModule,
    FormsModule,
    NbAutocompleteModule,
    NbIconModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
  ],
})
export class PartilhaAdiantamentoEditarModule { }
