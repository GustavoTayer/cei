import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitacoesRelatorioRoutingModule } from './solicitacoes-relatorio-routing.module';
import { SolicitacoesRelatorioComponent } from './solicitacoes-relatorio.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NbCardModule, NbSelectModule } from '@nebular/theme';
import { HorizontalBarComponent } from './horizontal-bar/horizontal-bar.component';
import { ProdutosGrafLinhaComponent } from './produtos-graf-linha/produtos-graf-linha.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SolicitacoesRelatorioComponent, HorizontalBarComponent, ProdutosGrafLinhaComponent],
  imports: [
    CommonModule,
    SolicitacoesRelatorioRoutingModule,
    NgxEchartsModule,
    NgxChartsModule,
    NbCardModule,
    NbSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SolicitacoesRelatorioModule { }
