import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarEquipeRoutingModule } from './editar-equipe-routing.module';
import { EditarEquipeComponent } from './editar-equipe.component';
import { NbCardModule, NbInputModule,
  NbButtonModule, NbIconModule,
  NbCheckboxModule, NbListModule,
  NbSelectModule, NbAutocompleteModule, NbSpinnerModule } from '@nebular/theme';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogShowComponentComponent } from './dialog-show-component/dialog-show-component.component';


@NgModule({
  declarations: [EditarEquipeComponent, DialogShowComponentComponent],
  entryComponents: [DialogShowComponentComponent],
  imports: [
    CommonModule,
    EditarEquipeRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    ReactiveFormsModule,
    FormsModule,
    NbIconModule,
    NbSelectModule,
    NbSpinnerModule,
    NbAutocompleteModule,
    NbCheckboxModule,
    NbListModule,
  ],
})
export class EditarEquipeModule { }
