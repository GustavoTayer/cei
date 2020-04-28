import { Injectable } from '@angular/core';
import { SECURED_URL } from '../../../auth/urls';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { NbToastrService } from '@nebular/theme';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  url = `${SECURED_URL}/user`;
  constructor(
    private http: HttpClient,
    private toastrService: NbToastrService,
    ) { }

  usuarioLogado() {
    return this.http.get<any>(`${this.url}/usuarioLogado`);
  }

  select() {
    return this.http.get(`${this.url}/select`);
  }

  buscar(filtro) {
    return this.http.post<any[]>(`${this.url}/buscar`, {filtro});
  }

  buscarPorId(id) {
    return this.http.post<any>(`${this.url}/buscarPorId`, {id});
  }

  criarConvite(convites) {
    return this.http.post(`${this.url}/criarConvite`, {convites})
      .pipe(map(res => {
        this.toastrService.success('', 'Convites enviados com sucesso');
        return res;
      }),
      catchError( err => {
        this.toastrService.danger(err.error.errors, 'Erro!');
        return [];
      }));
  }

  atualizarUsuario(dados) {
    return this.http.post(`${this.url}/atualizarUsuario`, dados)
      .pipe(map(res => {
          this.toastrService.success('', 'Usuário atualizado com sucesso');
          return true;
      }),
      catchError(err => {
        this.toastrService.danger(err.message, 'Erro!');
        return '';
      }));
  }

  menuAdmin() {
    return this.http.get(`${this.url}/menuAdmin`);
  }
}
