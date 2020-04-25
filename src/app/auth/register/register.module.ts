import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './register.component';
import { NbIconModule, NbInputModule, NbAlertModule, NbButtonModule, NbCheckboxModule } from '@nebular/theme';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    NbIconModule,
    NbInputModule,
    ReactiveFormsModule,
    NbAlertModule,
    NbButtonModule,
    FormsModule,
    NbCheckboxModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: RegisterComponent,
      },
    ]),
  ],
})
export class RegisterModule { }
