import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { EHierarquiaUsuario, EComunidadeUsuario, EEquipeUsuario } from '../../../../models/DbModels';
import * as moment from 'moment';
@Component({
  selector: 'ngx-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.scss'],
})
export class UsuarioEditarComponent implements OnInit {
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
  });

  equipes = Object.keys(EEquipeUsuario).map(it => ({k: it, v: EEquipeUsuario[it]}));
  comunidades = Object.keys(EComunidadeUsuario).map(it => ({k: it, v: EComunidadeUsuario[it]}));
  hierarquia = Object.keys(EHierarquiaUsuario).map(it => ({k: it, v: EHierarquiaUsuario[it]}));

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id !== 'novo') {
        this.usuarioService.buscarPorId(this.id).subscribe(res => {
          this.dados.patchValue({
            ...res,
            bd: res.bd && moment(res.bd),
          });
        });
      }
   });
  }

  ngOnInit(): void {
    this.dados.controls.email.disable();
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
      this.usuarioService.atualizarUsuario({_id: this.id, ...this.dados.value})
        .subscribe(res =>  {
          if (res) {
            this.router.navigate(['/pages/admin/usuarios']);
          }
        });
    }
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
