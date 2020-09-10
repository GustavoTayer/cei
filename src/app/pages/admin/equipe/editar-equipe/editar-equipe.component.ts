import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipeService } from '../equipe.service';
import {  FormBuilder, Validators, FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { EComunidadeUsuario } from '../../../../models/DbModels';
import { NbDialogService } from '@nebular/theme';
import { DialogShowComponentComponent } from './dialog-show-component/dialog-show-component.component';


@Component({
  selector: 'ngx-editar-equipe',
  templateUrl: './editar-equipe.component.html',
  styleUrls: ['./editar-equipe.component.scss'],
})
export class EditarEquipeComponent implements OnInit {
  editarMembro = false;
  membroSelecionado;
  id;
  editar = false;
  headerMessage = '';
  equipe;
  usuariosParaAdd;

  loading = false;
  adicionarMembro: FormControl;
  form = this.fb.group({
    nome: [null, Validators.required],
    descricao: null,
  });

  cargoMembro = new FormControl();
  editarFuncao = false;
  funcaoForm = this.fb.group({
    _id: null,
    nome: [null, Validators.required],
    descricao: null,
    permissoes: null,
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private equipeService: EquipeService,
    private dialogService: NbDialogService,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id === 'novo') {
        this.editar = true;
        this.headerMessage = 'Nova mensagem';
      } else if (this.id === 'minha-equipe') {
        this.equipeService.buscarMinhaEquipe();
      } else {
        this.loading = true;
        this.equipeService.buscarPorId(this.id)
          .subscribe(res => {
            this.equipe = res;
            this.form.patchValue({...res});
          }, (err) => err, () => this.loading = false);
      }
    });
    this.adicionarMembro =  new FormControl();
    this.usuariosParaAdd = of([]);
    this.adicionarMembro.valueChanges.subscribe(value => {
      this.usuariosParaAdd = this.equipeService.usuariosSemEquipeSelect(value).pipe(
        startWith(''),
        map(res => res || []),
      );
    });
  }

  viewHandle(value) {
    if (value && value.name) {
      return value.name;
    } else {
      return value;
    }
  }

  verificaValidacaoCampo(campo: string, erro?: string) {
    return (
      this.form.controls[campo].dirty && (erro
        ? this.form.controls[campo].errors &&
        this.form.controls[campo].errors[erro]
        : this.form.controls[campo].invalid)
    );
  }

  editarNomeDesc() {
    this.editar = true;
  }

  editarFuncaoAct(funcao?: any) {
    this.editarFuncao = true;
    if (funcao) {
      this.funcaoForm.patchValue({...funcao});
    } else {
      this.funcaoForm.patchValue({nome: null, descricao: null, permissoes: []});
    }
  }

  loadingSC = false;
  salvar() {
    if (this.form.valid) {
      this.editar = false;
      this.equipe = {...this.equipe, ...this.form.value};
      this.loadingSC = true;
      if (this.id === 'novo') {
        this.equipeService.criar(this.form.value).subscribe(res => {}, err => err, () => this.loadingSC = false);
      }
    }
  }

  formatarComunidade(comunidade: string) {
    return EComunidadeUsuario[comunidade];
  }

  loadingSF = false;
  salvarFuncao() {
    if (this.funcaoForm.valid) {
      if (this.funcaoForm.value._id) {

      } else {
        this.loadingSF = true;
        this.equipeService.criarCargo({...this.funcaoForm.value, equipe: this.id})
          .subscribe(res => {
            this.equipe = res;
            this.editarFuncao = false;
          }, err => err, () => this.loadingSF = false);
      }
    }
  }


  loadingAdd = false;
  add() {
    if (this.adicionarMembro.value && this.adicionarMembro.value._id) {
      this.loadingAdd = true;
      this.equipeService.adicionarMembro(this.id, this.adicionarMembro.value._id)
        .subscribe(res => {
          this.usuariosParaAdd = of([]);
          this.equipe = res;
        }, (err) => err, () => this.loadingAdd = false);
      this.adicionarMembro.patchValue('');
    }
  }

  editarMembroAct(membro) {
    this.editarMembro = true;
    this.membroSelecionado = membro;
  }

  loadingRM = false;
  removerMembro(usuarioId: string, nome: string) {
    this.dialogService.open(DialogShowComponentComponent, {
      context: {
        header: 'Remover membro da equipe',
        body: `Você tem certeza que deseja remover ${nome} da sua equipe?`,
      },
    }).onClose.subscribe(name => {
      this.loadingRM = true;
      if (name) {
        this.equipeService.removerMembro(this.id, usuarioId)
          .subscribe(res => {
            this.equipe = res;
          }, err => err, () => this.loadingRM = false);
      }
    });
  }

  loadingRF = false;
  removerFuncao(cargoId: string, nome: string) {
    this.dialogService.open(DialogShowComponentComponent, {
      context: {
        header: `Remover função ${nome}`,
        body: 'Essa ação irá remover a função de todos membro que a possuirem. Remover mesmo assim?',
      },
    }).onClose.subscribe(name => {
      if (name) {
        this.loadingRM = true;
        this.equipeService.removerCargo(this.id, cargoId)
          .subscribe(res => {
            if (res) {
              this.equipe = res;
            }
          }, err => err, () => this.loadingRM = false);
      }
    });
  }

  loadingAdicionarCM = false;
  adicionarCargoMembro() {
    if (this.cargoMembro.value) {
      this.loadingAdicionarCM = true;
      this.equipeService.adicionarCargoUsuario(this.id, this.membroSelecionado._id, this.cargoMembro.value)
        .subscribe(res => {
          if (res) {
            this.equipe = res;
            this.editarMembro = false;
          }
        }, err => err, () => this.loadingAdicionarCM = false);
    }
  }
}
