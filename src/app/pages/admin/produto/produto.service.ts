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

  // Busca somente produtos ativos
  lista() {
    return this.http.get<Produto[]>(`${this.produtoUrl}/lista`);
  }

  // Qualquer produto
  buscarProdutos() {
    return this.http.get<Produto[]>(`${this.produtoUrl}/buscar`);
  }

  buscarProdutoPorId(id: string) {
    return this.http.post<Produto>(`${this.produtoUrl}/buscarPorId`, {id});
  }

  criarProduto(produto: Produto) {
    return this.http.post(`${this.produtoUrl}/criar`, produto);
  }

  atualizarProduto(produto: Produto, id: string) {
    return this.http.put(`${this.produtoUrl}/atualizar`, {...produto, id});
  }

  validarTela() {
    return this.http.get<{autorizado: boolean}>(`${this.produtoUrl}/validarTela`);
  }
}
