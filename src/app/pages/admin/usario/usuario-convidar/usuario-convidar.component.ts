import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EComunidadeUsuario, EHierarquiaUsuario } from '../../../../models/DbModels';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'ngx-usuario-convidar',
  templateUrl: './usuario-convidar.component.html',
  styleUrls: ['./usuario-convidar.component.scss'],
})
export class UsuarioConvidarComponent implements OnInit {

  form = this.fb.group({
    email: [null, Validators.email],
  });

  comunidades = Object.keys(EComunidadeUsuario).map(it => ({k: it, v: EComunidadeUsuario[it]}));
  hierarquia = Object.keys(EHierarquiaUsuario).filter(it => it !== 'REITOR').map(it => ({k: it, v: EHierarquiaUsuario[it]}));
  convidados: FormGroup[] = [];
  constructor(private fb: FormBuilder,
    private usuarioService: UsuarioService,
    ) { }

  ngOnInit(): void {
  }

  remove(convidado) {
    this.convidados = this.convidados.filter(it => it.value.email !== convidado.value.email);
  }

  add() {
    if (this.form.valid) {
      const form = this.fb.group({
        email: null,
        hierarquia: null,
      });
      form.patchValue({email: this.form.value.email, hierarquia: 'SEMINARISTA'});
      this.convidados.push(form);
      this.form.patchValue({email: null});
    }
  }

  enviarConvites() {
    const convites = this.convidados.map(it => ({email: it.value.email, hierarquia: it.value.hierarquia}));
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
