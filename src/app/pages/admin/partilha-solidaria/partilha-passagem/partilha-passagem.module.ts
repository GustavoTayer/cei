import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartilhaPassagemRoutingModule } from './partilha-passagem-routing.module';
import { PartilhaPassagemComponent } from './partilha-passagem.component';
import { NbCardModule, NbListModule, NbInputModule, NbUserModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { customCurrencyMaskConfig } from '../../produto/criar-produto/criar-produto.module';


@NgModule({
  declarations: [PartilhaPassagemComponent],
  imports: [
    CommonModule,
    PartilhaPassagemRoutingModule,
    NbCardModule,
    NbListModule,
    ReactiveFormsModule,
    FormsModule,
    NbInputModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
  ],
})
export class PartilhaPassagemModule { }
