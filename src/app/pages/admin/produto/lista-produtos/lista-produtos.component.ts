import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../produto.service';


@Component({
  selector: 'ngx-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss'],
})
export class ListaProdutosComponent implements OnInit {

  produtos;
  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.buscarProdutos()
      .subscribe(res => this.produtos = res);
  }

}
