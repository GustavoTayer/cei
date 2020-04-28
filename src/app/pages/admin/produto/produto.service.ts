import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../../../models/DbModels';
import { SECURED_URL } from '../../../auth/urls';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  produtoUrl = `${SECURED_URL}/produto`;
  constructor(private http: HttpClient) { }

  buscarProdutos() {
    return this.http.get<Produto[]>(`${this.produtoUrl}/buscar`);
  }

  buscarProdutoPorId(id: string) {
    return this.http.get<Produto>(`${this.produtoUrl}/${id}`);
  }

  criarProduto(produto: Produto) {
    return this.http.post(this.produtoUrl, produto);
  }

  atualizarProduto(produto: Produto, id: string) {
    return this.http.put(`${this.produtoUrl}/${id}`, produto);
  }

  validarTela() {
    return this.http.get<{autorizado: boolean}>(`${this.produtoUrl}/validarTela`);
  }
}
