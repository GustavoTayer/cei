import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SECURED_URL } from '../../auth/urls';
import { ISolicitacaoProduto } from '../../models/DbModels';

@Injectable({
  providedIn: 'root',
})
export class SolicitacaoProdutoService {

  constructor(private http: HttpClient) { }

  url = `${SECURED_URL}/solicitacao-produto`;

  criarSolicitacao(solicitacao: ISolicitacaoProduto) {
    return this.http.post(`${this.url}/salvar`, solicitacao);
  }

  buscarSolicitacoes(filtro) {
    return this.http.post(`${this.url}/buscar`, {filtro});
  }
}
