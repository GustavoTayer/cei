import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  errors: string[];
  form = this.fb.group({
    name: [null, Validators.required],
    email: null,
    comunidade: null,
    password: [null, [Validators.required, this.validatePassword]],
    confirm_password: [null, Validators.required],
    bd: null,
  });
  id: string;
  constructor(private fb: FormBuilder, private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id !== 'novo') {
        this.authService.obterConvite(this.id).subscribe(res => {
          this.form.patchValue({
            ...res,
          });
          this.form.controls.email.disable();
        },
        err => alert(err));
      }
    });
  }
  password = '';
  ngOnInit(): void {
    this.form.controls.password.valueChanges.subscribe((a) => {
      this.password = a;
    });
  }

  validateEqualPassword() {
    return this.form.value.password !== this.form.value.confirm_password;
  }

  validatePassword(c: FormControl) {
    const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;
    return c.value && c.value.match(passwordRegex) ? null : {
      senhaFraca: {
        valid: false,
      },
    };
  }

  register() {
    this.authService.registerUser({...this.form.getRawValue(), conviteId: this.id})
      .subscribe(res => {
        localStorage.setItem('usuarioNome', res.name);
        localStorage.setItem('token', res.token);
        this.router.navigate(['pages/dashboard']);
      });
  }

  verificaValidacaoCampo(campo: string, erro?: string) {
    return (
      this.form.controls[campo].dirty && (erro
        ? this.form.controls[campo].errors &&
        this.form.controls[campo].errors[erro]
        : this.form.controls[campo].invalid)
    );
  }

  getConfigValue() {
  }
}
