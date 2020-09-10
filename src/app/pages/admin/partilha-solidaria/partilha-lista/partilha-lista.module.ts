import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartilhaListaRoutingModule } from './partilha-lista-routing.module';
import { PartilhaListaComponent } from './partilha-lista.component';
import { NbCardModule, NbListModule,
  NbIconModule, NbInputModule,
   NbButtonModule, NbSelectModule, NbAutocompleteModule,
   NbDatepickerModule, NbCheckboxModule, NbDialogModule, NbTooltipModule, NbSpinnerModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { DialogShowcaseComponent } from './dialog-showcase/dialog-showcase.component';
import { customCurrencyMaskConfig } from '../../produto/criar-produto/criar-produto.module';
import { NgxCurrencyModule } from 'ngx-currency';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [PartilhaListaComponent, DialogShowcaseComponent],
  entryComponents: [DialogShowcaseComponent],
  imports: [
    CommonModule,
    PartilhaListaRoutingModule,
    NbCardModule,
    NbListModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    ReactiveFormsModule,
    FormsModule,
    NbSelectModule,
    NbAutocompleteModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbDialogModule.forChild(),
    NbDateFnsDateModule.forChild({format: 'dd/MM/yyyy'}),
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    FontAwesomeModule,
    NbTooltipModule,
    NbSpinnerModule,
  ],
})
export class PartilhaListaModule { }
