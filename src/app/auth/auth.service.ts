import { Injectable } from '@angular/core';
import { OPEN_URL } from './urls';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private registerUrl = `${OPEN_URL}/signup`;
  private loginUrl = `${OPEN_URL}/login`;
  private validateToken = `${OPEN_URL}/validateToken`;
  private obterConviteUrl = `${OPEN_URL}/obterConvite`;

  private usuarioLogadoUrl = `${OPEN_URL}/usuarioLogado`;
  constructor(private http: HttpClient) { }

  usuarioLogado() {
    return this.http.get(this.usuarioLogadoUrl);
  }

  registerUser(user) {
    return this.http.post<any>(this.registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this.loginUrl, user);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return this.http.post<{valid: boolean}>(this.validateToken, {token});
  }

  getToken() {
    return localStorage.getItem('token');
  }

  obterConvite(id) {
    return this.http.post<{valid: boolean}>(this.obterConviteUrl, {id});
  }
}
