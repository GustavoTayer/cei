import { Component, OnInit } from '@angular/core';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder } from '@angular/forms';
import {UsuarioService} from '../usuario.service';
import { EComunidadeUsuario} from '../../../../models/DbModels';
import { BASE_URL } from '../../../../auth/urls';
@Component({
  selector: 'ngx-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.scss'],
})
export class UsuarioListaComponent implements OnInit {
  faSearch = faSearch;
  faPlus = faPlus;
  filtro = this.fb.group({
    nome: null,
  });
  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    ) { }
  users = [];

  buscar() {
    this.usuarioService.buscar(this.filtro.value).subscribe(res => this.setDataUser(res));
  }

  ngOnInit(): void {
    this.usuarioService.buscar({}).subscribe(res => this.setDataUser(res));
  }

  setDataUser(usuarios) {
   this.users = usuarios.map(it => ({
      ...it,
      comunidade: EComunidadeUsuario[it.comunidade],
    }));
  }

  getPicture(id) {
    return `${BASE_URL}/images/${id}.JPG`;
  }

}
