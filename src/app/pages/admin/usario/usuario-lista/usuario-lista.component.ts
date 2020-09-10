import { Component, OnInit } from '@angular/core';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { EComunidadeUsuario } from '../../../../models/DbModels';
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
  loading = false;
  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
  ) { }
  users = [];

  buscar() {
    this.loading = true;
    this.usuarioService.buscar(this.filtro.value).subscribe(
      res => this.setDataUser(res),
      err => err, () => this.loading = false);
  }

  ngOnInit(): void {
    this.loading = true;
    this.usuarioService.buscar({}).subscribe(
      res => this.setDataUser(res),
      err => err, () => this.loading = false,
    );
  }

  setDataUser(usuarios) {
    this.users = usuarios.map(it => ({
      ...it,
      comunidade: EComunidadeUsuario[it.comunidade],
    }));
  }

  getPicture(id) {
    // return this.usuarioService.obterImagem(id);
  }

}
