import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SolicitacoesListaComponent } from './solicitacoes-lista.component';
import { NbCardModule,
  NbSelectModule,
  NbAccordionModule,
  NbDatepickerModule,
  NbTreeGridModule,
  NbInputModule,
  NbButtonModule,
  NbListModule,
  NbIconModule,
  NbTooltipModule,
  NbCheckboxModule,
  NbDialogModule,
  NbAlertModule,
} from '@nebular/theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NbMomentDateModule } from '@nebular/moment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogShowcaseComponent } from './dialog-showcase/dialog-showcase.component';

@NgModule({
  declarations: [SolicitacoesListaComponent, DialogShowcaseComponent],
  entryComponents: [DialogShowcaseComponent],
  imports: [
    CommonModule,
    NbButtonModule,
    NbCardModule,
    NgxChartsModule,
    NgxEchartsModule,
    NbSelectModule,
    NbInputModule,
    NbCardModule,
    NbAccordionModule,
    NbAlertModule,
    ReactiveFormsModule,
    FormsModule,
    NbDatepickerModule,
    NbTreeGridModule,
    NbListModule,
    NbIconModule,
    FontAwesomeModule,
    NbMomentDateModule,
    NbTooltipModule,
    NbCheckboxModule,
    NbDialogModule.forChild(),
    RouterModule.forChild([
      {
        path: '',
        component: SolicitacoesListaComponent,
      },
    ]),
  ],
})
export class SolicitacoesListaModule { }
