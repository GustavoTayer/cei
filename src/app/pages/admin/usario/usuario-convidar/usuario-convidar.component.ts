import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { EComunidadeUsuario, EHierarquiaUsuario } from '../../../../models/DbModels';
import { UsuarioService } from '../usuario.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-usuario-convidar',
  templateUrl: './usuario-convidar.component.html',
  styleUrls: ['./usuario-convidar.component.scss']
})
export class UsuarioConvidarComponent implements OnInit {

  form = this.fb.group({
    email: [null, Validators.email],
  });

  comunidades = Object.keys(EComunidadeUsuario).map(it => ({k: it, v: EComunidadeUsuario[it]}));
  hierarquia = Object.keys(EHierarquiaUsuario).map(it => ({k: it, v: EHierarquiaUsuario[it]}));
  convidados: FormGroup[] = [];
  constructor(private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private toastrService: NbToastrService) { }

  ngOnInit(): void {
  }

  remove(convidado) {
    this.convidados = this.convidados.filter(it => it.value.email !== convidado.value.email)
  }

  add() {
    if (this.form.valid) {
      const form = this.fb.group({
        email: null,
        comunidade: null,
      });
      form.patchValue({email: this.form.value.email, comunidade: 'PROPEDEUTICO'});
      this.convidados.push(form);
      this.form.patchValue({email: null});
    }
  }

  enviarConvites() {
    const convites = this.convidados.map(it => ({email: it.value.email, comunidade: it.value.comunidade}));
    this.usuarioService.criarConvite(convites).subscribe(res => {
      this.convidados = [];
    });
  }

  verificaValidacaoCampo(campo: string, erro?: string) {
    return (
      this.form.controls[campo].dirty && (erro
        ? this.form.controls[campo].errors &&
        this.form.controls[campo].errors[erro]
        : this.form.controls[campo].invalid)
    );
  }

}
