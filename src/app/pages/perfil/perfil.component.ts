import { Component, OnInit } from '@angular/core';
import { EEquipeUsuario, EComunidadeUsuario, EHierarquiaUsuario } from '../../models/DbModels';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsuarioService } from '../admin/usario/usuario.service';
import { subYears } from 'date-fns';
import { EquipeService } from '../admin/equipe/equipe.service';
import { HttpClient } from '@angular/common/http';
import { SECURED_URL } from '../../auth/urls';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  id: string;
  dados = this.fb.group({
    ativo: null,
    comunidade: new FormControl({value: null, disabled: true}),
    email: new FormControl({value: null, disabled: true}),
    equipe: new FormControl({value: null, disabled: true}),
    hierarquia: new FormControl({value: null, disabled: true}),
    name: [null, Validators.required],
    bd: [null, this.validarDataAniversario],
    coordenaEquipe: new FormControl({value: null, disabled: true}),
    mudarSenha: null,
    password: null,
    password_confirm: null,
  });

  equipes: {_id: string, nome: string}[];
  comunidades = Object.keys(EComunidadeUsuario).map(it => ({k: it, v: EComunidadeUsuario[it]}));
  hierarquia = Object.keys(EHierarquiaUsuario).map(it => ({k: it, v: EHierarquiaUsuario[it]}));
  mudarSenha = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private equipeService: EquipeService,
    private http: HttpClient,
    private toastrService: NbToastrService) { }


    avatar;
  ngOnInit(): void {
    this.usuarioService.usuarioLogado().subscribe(res => {
      this.equipeService.select().subscribe(eqps => {
        this.equipes = eqps;
        this.dados.patchValue({
          ...res,
          bd: res.bd && new Date(res.bd),
        });
      });
    });

    this.usuarioService.image.subscribe(res => {
      this.avatar = res;
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
    if (control.value && subYears(new Date(), 10) <= control.value) {
      return {
        dataInvalida: true,
      };
    }
    return null;
  }

  salvar() {
    if (this.dados.valid) {
      this.usuarioService.atualizarUsuarioLogado(this.dados.value)
        .subscribe(res =>  {
          if (res) {
            this.router.navigate(['/pages/dashboard']);
          }
        });
    }
  }
  image
  uploadFiles(file) {
    if (file.length > 0) {
      this.image = file[0];
      this.enviarDoc()
    }
  }

  enviarDoc() {
    const formData = new FormData();
    formData.append('file', this.image, this.image.name);
    this.http.post(`${SECURED_URL}/user/atualizarAvatar`, formData)
      .subscribe((res) => {
       this.toastrService.success('Doc enviado com sucesso');
       this.usuarioService.getAvatarFromService();
      }, err => this.toastrService.danger('erro ao enviar o arquivo, favor tentar novamente'));
    // return this.http.post(`${SECURED_URL}/partilha/obterDoc2`, {file: 'f4b5164f-1993-4903-8867-2bad19fd8221-1596485555705.jpeg'}, {responseType: 'blob'})
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
