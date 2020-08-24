import { Component, OnInit } from '@angular/core';
import { UnsubscribeOnDestroyAdapter } from '../../../util/UnsubscribeOnDestroyAdapter';
import { FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../usario/usuario.service';
import { EComunidadeUsuario } from '../../../../models/DbModels';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-partilha-passagem',
  templateUrl: './partilha-passagem.component.html',
  styleUrls: ['./partilha-passagem.component.scss'],
})
export class PartilhaPassagemComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
  seminaristas: any[];
  seminarista = new FormControl('');
  editar = false;
  seminaristaSelecionado: {
    _id?: string,
    name?: string,
    paroquia?: string,
    comunidade?: String, passagem?: number } = {};

  passagem = new FormControl(0);
  paroquia = new FormControl('', Validators.required);
  constructor(private usuarioService: UsuarioService,
    private toastrService: NbToastrService) {
    super();
  }

  ngOnInit(): void {
    this.subs.sink = this.usuarioService.semPassListagem().subscribe(res => {
      this.seminaristas = res;
    });
    this.subs.sink = this.seminarista.valueChanges.subscribe(res => {
      this.subs.sink = this.usuarioService.semPassListagem(res).subscribe(seminaristas => this.seminaristas = seminaristas);
    });
  }

  editarSem(seminarista) {
    this.seminaristaSelecionado = seminarista;
    this.editar = true;
    this.passagem.patchValue(seminarista.passagem);
    this.paroquia.patchValue(seminarista.paroquia);
  }

  comunidade(comunidade) {
    return EComunidadeUsuario[comunidade];
  }

  salvar() {
    if (this.passagem.valid && this.paroquia.valid) {
      this.subs.sink = this.usuarioService.semPassAlterar(this.seminaristaSelecionado._id, this.passagem.value, this.paroquia.value)
        .subscribe(res => {
          this.toastrService.success('Valores de paróquia e passagem foram atualizados', 'Usuário atualizado');
          this.subs.sink = this.usuarioService.semPassListagem().subscribe( a => {
            this.seminaristas = a;
            this.editar = false;
            this.paroquia.patchValue('');
            this.passagem.patchValue(0);
          });
        });
    }
  }
}
