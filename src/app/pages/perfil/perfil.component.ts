import { Component, OnInit } from '@angular/core';
import { EEquipeUsuario, EComunidadeUsuario, EHierarquiaUsuario } from '../../models/DbModels';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsuarioService } from '../admin/usario/usuario.service';
import * as moment from 'moment';

@Component({
  selector: 'ngx-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  id: string;
  dados = this.fb.group({
    ativo: null,
    comunidade: null,
    email: null,
    equipe: null,
    hierarquia: null,
    name: [null, Validators.required],
    bd: [null, this.validarDataAniversario],
    coordenaEquipe: null,
    mudarSenha: null,
    password: null,
    password_confirm: null,
  });

  equipes = Object.keys(EEquipeUsuario).map(it => ({k: it, v: EEquipeUsuario[it]}));
  comunidades = Object.keys(EComunidadeUsuario).map(it => ({k: it, v: EComunidadeUsuario[it]}));
  hierarquia = Object.keys(EHierarquiaUsuario).map(it => ({k: it, v: EHierarquiaUsuario[it]}));
  mudarSenha = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.usuarioLogado().subscribe(res => {
      this.dados.patchValue({
        ...res,
        bd: res.bd && moment(res.bd),
      });
      this.dados.controls.email.disable();
      // this.dados.controls.comunidade.disable();
      this.dados.controls.hierarquia.disable();
      this.dados.controls.coordenaEquipe.disable();
      this.dados.controls.equipe.disable();
    });
    this.dados.controls.mudarSenha.valueChanges.subscribe(valor => {
      if (valor) {
        this.dados.controls.password.setValidators([Validators.required, this.validatePassword]);
        this.dados.controls.password_confirm.setValidators([Validators.required]);
      } else {
        this.dados.controls.password_confirm.clearValidators();
        this.dados.controls.password.clearValidators();
      }
      this.mudarSenha = valor;
      // console.log(this.dados.errors)
    });
  }

  validatePassword(c: FormControl) {
    const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;
    return c.value && c.value.match(passwordRegex) ? null : {
      senhaFraca: {
        valid: false,
      },
    };
  }
  validarDataAniversario(control: FormControl) {
    if (control.value && moment().subtract(10, 'years') <= control.value) {
      return {
        dataInvalida: true,
      };
    }
    return null;
  }

  salvar() {
    if (this.dados.valid) {
      this.usuarioService.atualizarUsuario(this.dados.value)
        .subscribe(res =>  {
          if (res) {
            this.router.navigate(['/pages/admin/usuarios']);
          }
        });
    }
  }

  validateEqualPassword() {
    return this.dados.value.mudarSenha && this.dados.value.password !== this.dados.value.password_confirm;
  }

  verificaValidacaoCampo(campo: string, erro?: string) {
    return (
      this.dados.controls[campo].dirty && (erro
        ? this.dados.controls[campo].errors &&
        this.dados.controls[campo].errors[erro]
        : this.dados.controls[campo].invalid)
    );
  }

}
