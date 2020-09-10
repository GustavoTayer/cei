import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { EHierarquiaUsuario, EComunidadeUsuario } from '../../../../models/DbModels';
import { EquipeService } from '../../equipe/equipe.service';
import { subYears } from 'date-fns';
import { UnsubscribeOnDestroyAdapter } from '../../../util/UnsubscribeOnDestroyAdapter';
@Component({
  selector: 'ngx-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.scss'],
})
export class UsuarioEditarComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
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
    paroquia: null,
    passagem: null,
  });

  equipes: { _id: string, nome: string }[];
  comunidades = Object.keys(EComunidadeUsuario).map(it => ({ k: it, v: EComunidadeUsuario[it] }));
  hierarquia = Object.keys(EHierarquiaUsuario).map(it => ({ k: it, v: EHierarquiaUsuario[it] }));
  equipeAntiga: string;
  equipeAtual: string;
  loading = false;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private equipeSerivice: EquipeService) {
    super();
    this.loading = true;
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id !== 'novo') {
        this.usuarioService.buscarPorId(this.id).subscribe(res => {
          this.equipeSerivice.select().subscribe(eqps => {
            this.equipes = eqps;
            console.log(res)
            this.dados.patchValue({
              ...res,
              bd: res.bd && new Date(res.bd),
            });
          }, (err) => err, () => this.loading = false);
        });
      }
    });
  }

  ngOnInit(): void {
    this.dados.controls.email.disable();
  }

  validarDataAniversario(control: FormControl) {
    if (control.value && subYears(new Date(), 10) <= new Date(control.value)) {
      return {
        dataInvalida: true,
      };
    }
    return null;
  }

  salvar() {
    if (this.dados.valid) {
      this.usuarioService.atualizarUsuario({ _id: this.id, ...this.dados.value })
        .subscribe(res => {
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
