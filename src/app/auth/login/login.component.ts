import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errors: string[];
  form = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
  });

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.form.valid) {
      this.auth.loginUser({
        email: this.form.value.email,
        password: this.form.value.password,
      }).subscribe(res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['pages/dashboard']);
      },
      err => {
        if (err.error && err.error.errors) {
          this.errors = err.error.errors;
        } else {
          this.errors = ['Erro desconhecido.'];
        }
      });
    }
  }
}
