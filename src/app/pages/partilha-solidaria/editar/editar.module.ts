import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarRoutingModule } from './editar-routing.module';
import { EditarComponent } from './editar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NbCardModule, NbSelectModule, NbInputModule, NbAlertModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { NgxCurrencyModule } from 'ngx-currency';
import { customCurrencyMaskConfig } from '../../admin/produto/criar-produto/criar-produto.module';
import { FileUploadModule } from 'ng2-file-upload';
import { PerfilModule } from '../../perfil/perfil.module';


@NgModule({
  declarations: [EditarComponent],
  imports: [
    CommonModule,
    EditarRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NbCardModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    NbAlertModule,
    FileUploadModule,
    PerfilModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    NbIconModule,
  ],
})
export class EditarModule { }
