import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../../usario/usuario.service';
import { map } from 'rxjs/operators';
import { PartilhaSolidariaService } from '../../../../partilha-solidaria/partilha-solidaria.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'ngx-partilha-adiantamento-editar',
  templateUrl: './partilha-adiantamento-editar.component.html',
  styleUrls: ['./partilha-adiantamento-editar.component.scss'],
})
export class PartilhaAdiantamentoEditarComponent implements OnInit {
  filteredOptions$: Observable<{_id: string, name: string}[]>;
  form = this.fb.group({
    usuario: [null, [this.validateSeminarista, Validators.required]],
    data: [new Date(), Validators.required],
    justificativa: [null, Validators.required],
    valor: [0, [Validators.required, Validators.min(0.01)]],
  });
  usuarios;
  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private partilhaService: PartilhaSolidariaService,
    private router: Router,
    ) { }

  ngOnInit(): void {
   this.usuarioService.seminaristasAtivosAutocomplete('').subscribe(res => {
     this.usuarios = res;
     this.filteredOptions$ = of(this.usuarios.slice(0, 5));
    });
    this.form.controls.usuario.valueChanges.subscribe(
      value => this.filteredOptions$ = this.getFilteredOptions(value),
    );
  }

  private filter(value: string): {_id: string, name: string}[] {
    const filterValue = value.toLowerCase();
    return this.usuarios.filter(optionValue => optionValue.name.toLowerCase().includes(filterValue)).slice(0, 4);
  }

  getFilteredOptions(value: string): Observable<{_id: string, name: string}[]> {
    return of(value).pipe(
      map(filterString => this.filter(filterString)),
    );
  }

  viewHandle(value) {
    if (value && value.name) {
      return value.name;
    } else {
      return value;
    }
  }

  validateSeminarista(c: FormControl) {
    return typeof c.value === 'object' ? null : {
      selecionado: {
        valid: false,
      },
    };
  }

  verificaValidacaoValor(erro?: string) {
    return (
      (erro
        ? this.form.controls.valor.errors &&
        this.form.controls.valor.errors[erro]
        : this.form.controls.valor.invalid)
    );
  }

  verificaValidacaoCampo(campo: string, erro?: string) {
    return (
      this.form.controls[campo].dirty && (erro
        ? this.form.controls[campo].errors &&
        this.form.controls[campo].errors[erro]
        : this.form.controls[campo].invalid)
    );
  }

  showPassword = true;

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  criar() {
    if (this.form.valid) {
      this.partilhaService.adiantamentoCriar(this.form.value)
        .subscribe(res => {
          this.router.navigate(['/pages/admin/partilha/adiantamento/lista']);
        });
    }
  }
}
