import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitacoesRelatorioRoutingModule } from './solicitacoes-relatorio-routing.module';
import { SolicitacoesRelatorioComponent } from './solicitacoes-relatorio.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {
  NbCardModule,
  NbSelectModule,
  NbDatepickerModule,
  NbInputModule,
  NbButtonModule,
  NbIconModule,
  NbAccordionModule,
  NbTooltipModule,
  NbListModule,
} from '@nebular/theme';
import { ProdutosGrafLinhaComponent } from './produtos-graf-linha/produtos-graf-linha.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { ListVendaSeminaristaComponent } from './list-venda-seminarista/list-venda-seminarista.component';
import { LBarComponent } from './l-bar/l-bar.component';
import { LBarBacksideComponent } from './l-bar-backside/l-bar-backside.component';

@NgModule({
  declarations: [
    SolicitacoesRelatorioComponent,
    ProdutosGrafLinhaComponent,
    ListVendaSeminaristaComponent,
    LBarComponent,
    LBarBacksideComponent,
  ],
  imports: [
    CommonModule,
    SolicitacoesRelatorioRoutingModule,
    NgxEchartsModule,
    NgxChartsModule,
    NbCardModule,
    NbSelectModule,
    ReactiveFormsModule,
    FormsModule,
    NbInputModule,
    NbDatepickerModule,
    NbButtonModule,
    NbIconModule,
    NbTooltipModule,
    NbListModule,
    NbDateFnsDateModule.forChild({
      format: 'dd/MM/yyyy',
    }),
    NbAccordionModule,
  ],
})
export class SolicitacoesRelatorioModule { }
