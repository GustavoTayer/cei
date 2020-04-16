import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProdutoService } from '../../admin/produto.service';
import { ProductSelectComponent } from '../../util/product-select/product-select.component';
import { NbToastrService, NbDateService } from '@nebular/theme';
import { SolicitacaoProdutoService } from '../solicitacao-produto.service';
import { Router } from '@angular/router';
import { Produto } from '../../../models/DbModels';

@Component({
  selector: 'ngx-criar-solicitacao',
  templateUrl: './criar-solicitacao.component.html',
  styleUrls: ['./criar-solicitacao.component.scss']
})
export class CriarSolicitacaoComponent implements OnInit {
  form = this.fb.group({
    dataEntrega: [null, Validators.required],
  });

  produtosSolicitados: any[] = [];

  tiposProduto: Produto[] = [];
  produtos = [];

  settings: any = {
    noDataMessage: '',
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
    },
    actions: {
      columnTitle: 'Ações',
    },
    columns: {
      produto: {
        title: 'Nome',
        valuePrepareFunction: (cell, row, category) => {
          const t = this.produtos.find(x => x.value === cell);
          if (t)
           return t.title;
          },
        editor: {
          type: 'list',
          config: {
            list: [],
          },
        },
      },
      valor: {
        title: 'Valor und.',
        type: 'text',
        editable: false,
        addable: false,
        filter: false,
      },
      quantidade: {
        title: 'Quantidade',
        type: 'number',
        editable: true,
        filter: true,
        addable: true,
        editor: {
          type: 'custom',
          component: ProductSelectComponent,
        },
      },
    },
  };

  min: Date;
  max: Date;

  constructor(private fb: FormBuilder, private produtoService: ProdutoService,
    private toastrService: NbToastrService,
    protected dateService: NbDateService<Date>,
    private solicitacaoProdutoService: SolicitacaoProdutoService,
    private router: Router,
    ) {
      this.min = this.dateService.addDay(this.dateService.today(), 0);
    }

   printErros() {
     return JSON.stringify(this.form.controls.dataEntrega.errors)
   }

   ngOnInit() {
    this.dateService.addDay(this.dateService.today(), -1);
     this.produtoService.buscarProdutos()
      .subscribe(res => {
        this.tiposProduto = res;
        this.listaProdutos(res);
      });
  }

  listaProdutos(res: Produto[]) {
    this.produtos = res.map(it => ({value: it._id, title: it.nome}));
    this.settings = {...this.settings,
      columns: {
        produto: {
          title: 'Nome',
          filter: false,
          valuePrepareFunction: (cell, row, category) => {
            const t = this.produtos.find(x => x.value === cell);
            if (t)
             return t.title;
            },
          editor: {
            type: 'list',
            config: {
              list: this.produtos,
            },
          },
        },
      valor: {
        title: 'Valor und.',
        type: 'text',
        editable: false,
        addable: false,
        filter: false,
        valuePrepareFunction: (cell, row, category) => {
          const p = this.tiposProduto.find(prod => prod._id === row.produto);
          return `R$ ${ p && p.valor || '' }`;
        },
      },
        quantidade: {
          title: 'Quantidade',
          type: 'number',
          editable: true,
          filter: false,
          addable: true,
          editor: {
            type: 'custom',
            component: ProductSelectComponent,
          },
        },
      },
    };
  }

  salvar() {
    this.produtosSolicitados;
    const validacaoProd = this.validarProdutos();
    if (validacaoProd) {
      this.toastrService.danger( validacaoProd, 'Erro de validação!');
    } else if (this.form.valid) {
      this.solicitacaoProdutoService.criarSolicitacao({
        dataDesejada: this.form.value.dataEntrega,
        produtos: this.produtosSolicitados,
      }).subscribe(res => {
        this.toastrService.success('', 'Solicitação criada com sucesso!');
        this.router.navigate(['/pages/solicitacao-produto']);
      }, err => {
        this.toastrService.danger(err, 'Erro!');
      });
    }

  }

  validarProdutos(): String | null {
    if (this.produtosSolicitados.find(prod => !prod.produto)) {
      return 'Favor, escolha o nome do produto no valor que está faltando';
    }

    const quantidadeProdFaltando = this.produtosSolicitados.filter(prod => !prod.quantidade);
    if (quantidadeProdFaltando && quantidadeProdFaltando.length) {
        const c = quantidadeProdFaltando.map(p => this.tiposProduto.find(prod => prod._id === p.produto).nome);
        if (c && c.length) {
          return `Favor, digitar a quantidade desejada para os seguintes produtos: ${c.toString()}`;
        }
    }
  }
}
