import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OPEN_URL } from './urls';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private registerUrl = `${OPEN_URL}/signup`;
  private loginUrl = `${OPEN_URL}/login`;
  private validateToken = `${OPEN_URL}/validateToken`;
  constructor(private http: HttpClient) { }

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
}
