import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { SolicitacaoProdutoService } from '../../../solicitacao-produto/solicitacao-produto.service';


@Component({
  selector: 'ngx-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss'],
})
export class ListaProdutosComponent implements OnInit {

  produtos;
  constructor(private produtoService: ProdutoService,
    private solicitacaoService: SolicitacaoProdutoService) { }

  ngOnInit() {
    this.produtoService.buscarProdutos()
      .subscribe(res => this.produtos = res);
  }

}
