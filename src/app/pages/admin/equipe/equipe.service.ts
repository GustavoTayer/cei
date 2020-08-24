import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SECURED_URL } from '../../../auth/urls';
import { map, catchError } from 'rxjs/operators';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { Equipe, Cargo } from '../../../models/DbModels';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(
    private http: HttpClient,
    private toastrService: NbToastrService,
    private router: Router) { }
  url = `${SECURED_URL}/equipe`;

  lista() {
    return this.http.get(`${this.url}/lista`);
  }

  criar(form: Equipe) {
    return this.http.post<Equipe>(`${this.url}/criar`, form)
      .pipe(map(res => {
        this.toastrService.success('Agora você pode definir membros e criar funções', 'Equipe criada com sucesso');
        this.router.navigate([`/pages/admin/equipe/editar/${res._id}`]);
      }),
      catchError(err => {
        this.toastrService.danger(err, 'Erro!');
        return of(false);
      }));
  }

  adicionarMembro(id, usuarioId) {
    return this.http.post<Equipe>(`${this.url}/adicionarMembro`, {id, usuarioId});
  }

  buscarPorId(id) {
    return this.http.post<Equipe>(`${this.url}/buscarPorId`, {id});
  }
  buscarMinhaEquipe() {
    return this.http.get<Equipe>(`${this.url}/buscarMinhaEquipe`);
  }

  select() {
    return this.http.get<{nome: string, _id: string}[]>(`${this.url}/select`);
  }
  usuariosSemEquipeSelect(q: string) {
    return this.http.post<{nome: string, _id: string}[]>(`${this.url}/usuariosSemEquipeSelect`, {q});
  }

  criarCargo(cargo: Cargo) {
    return this.http.post<Equipe>(`${this.url}/criarCargo`, cargo).pipe(
      map(res => {
        this.toastrService.success('', 'Cargo criado com sucesso');
        return res;
      }),
      catchError(err => {
        this.toastrService.danger(err, 'Erro!');
        return of({nome: ''});
      }),
    );
  }

  removerMembro(id: string, usuarioId: string) {
    return this.http.post<Equipe>(`${this.url}/removerMembro`, {id, usuarioId}).pipe(
      map(res => {
        this.toastrService.success('', 'Membro removido com sucesso');
        return res;
      }),
      catchError(err => {
        this.toastrService.danger(err, 'Erro!');
        return of({nome: ''});
      }),
    );
  }

  removerCargo(id: string, cargoId: string) {
    return this.http.post<Equipe>(`${this.url}/removerCargo`, {id, cargoId}).pipe(
      map(res => {
        this.toastrService.success('', 'Cargo removido com sucesso');
        return res;
      }),
      catchError(err => {
        this.toastrService.danger(err, 'Erro!');
        return of(false);
      }),
    );
  }

  adicionarCargoUsuario(id: string, usuarioId: string, cargoId) {
    return this.http.post<Equipe>(`${this.url}/adicionarCargoUsuario`, {id, usuarioId, cargoId}).pipe(
      map(res => {
        this.toastrService.success('', 'Membro removido com sucesso');
        return res;
      }),
      catchError(err => {
        this.toastrService.danger(err, 'Erro!');
        return of(false);
      }),
    );
  }
}
