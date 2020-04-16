import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { NbToastrService } from '@nebular/theme';
import { ProdutoService } from '../../produto.service';

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

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private toastrService: NbToastrService,
    ) {
      this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id !== 'novo') {
        this.produtoService.buscarProdutoPorId(this.id).subscribe(res => {
          this.form.patchValue({
            ...res,
          });
        });
      }
   });
  }

  ngOnInit() {
  }

  salvar() {
    if (this.form.valid) {
      if (this.id === 'novo') {
        this.produtoService.criarProduto({...this.form.value}).subscribe(res => {
          this.router.navigate(['/pages/admin/produto']);
          this.toastrService.success('Produto criado com sucesso!', 'Sucesso!');
        },
        err => this.toastrService.danger('Erro!', err.errors));
      } else {
        this.produtoService.atualizarProduto({...this.form.value}, this.id)
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
