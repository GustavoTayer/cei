import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinhasEscalasComponent } from './minhas-escalas.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { MatButtonModule } from '@angular/material/button';
import { NbInputModule, NbIconModule, NbButtonModule, NbCardModule, NbDatepickerModule } from '@nebular/theme';
import { ProductSelectModule } from '../../util/product-select/product-select.module';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';

// FullCalendarModule.registerPlugins([ // register FullCalendar plugins
//   dayGridPlugin,
//   interactionPlugin,
// ]);

@NgModule({
  declarations: [MinhasEscalasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MinhasEscalasComponent,
      },
    ]),
    SatPopoverModule,
    ReactiveFormsModule,
    FormsModule,
    FullCalendarModule,
    MatButtonModule,
    NbInputModule,
    NbIconModule,
    NbCardModule,
    ProductSelectModule,
    NbButtonModule,
    NbDatepickerModule,
    NbDateFnsDateModule.forChild({
      format: 'dd/MM/yyyy',
    }),
  ]
})
export class MinhasEscalasModule { }
