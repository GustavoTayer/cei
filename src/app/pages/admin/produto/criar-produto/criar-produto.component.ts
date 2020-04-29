import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { NbToastrService } from '@nebular/theme';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'ngx-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.scss'],
})
export class CriarProdutoComponent implements OnInit {

  form = this.fb.group({
    nome: [null, Validators.required],
    descricao: null,
    valor: [null, Validators.required],
    ativo: null,
  });
  id: string;
  headerMessage: 'Criar' | 'Editar';
  color = '#fff';
  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private toastrService: NbToastrService,
    ) {
      this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id !== 'novo') {
        this.headerMessage = 'Editar';
        this.produtoService.buscarProdutoPorId(this.id).subscribe(res => {
          this.form.patchValue({
            ...res,
          });
          this.color = res.cor || '#fff';
        });
      } else {
        this.headerMessage = 'Criar';
      }
   });
  }

  ngOnInit() {
  }

  salvar() {
    if (this.form.valid) {
      if (this.id === 'novo') {
        this.produtoService.criarProduto({...this.form.value, cor: this.color}).subscribe(res => {
          this.router.navigate(['/pages/admin/produto']);
          this.toastrService.success('Produto criado com sucesso!', 'Sucesso!');
        },
        err => this.toastrService.danger('Erro!', err.errors));
      } else {
        this.produtoService.atualizarProduto({...this.form.value, cor: this.color}, this.id)
          .subscribe(res => {
            this.router.navigate(['/pages/admin/produto']);
            this.toastrService.success('Produto atualizado com sucesso!');
          },
          err => this.toastrService.danger('Erro!', err.errors));
      }
    }
  }

  verificaValidacaoCampo(campo: string, erro?: string) {
    return (
      this.form.controls[campo].dirty && (erro
        ? this.form.controls[campo].errors &&
        this.form.controls[campo].errors[erro]
        : this.form.controls[campo].invalid)
    );
  }
}
