import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SECURED_URL } from '../../auth/urls';
import { ISolicitacaoProduto, IProdutoCount, EStatusSolicitacao } from '../../models/DbModels';
import { map, catchError } from 'rxjs/operators';
import { NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root',
})
export class SolicitacaoProdutoService {

  constructor(private http: HttpClient, private toastrService: NbToastrService) { }

  url = `${SECURED_URL}/solicitacao-produto2`;
  urlProduto = `${SECURED_URL}/produtos-solicitados`;

  criarSolicitacao(solicitacao: ISolicitacaoProduto) {
    return this.http.post(`${this.url}/salvar`, solicitacao);
  }

  buscarSolicitacoes(filtro, pageNumber: number, nPerPage: number) {
    return this.http.post(`${this.url}/buscar`, {filtro, pageNumber, nPerPage})
      .pipe(map(res => res),
      catchError(err => {
        this.toastrService.danger(err.error.errors, 'ERRO!');
        return [];
      }));
  }

  countProdutos(filtro) {
    return this.http.post<IProdutoCount[]>(`${this.urlProduto}/count`, {filtro});
  }

  relProd(frequencia: string, start, end) {
    return this.http.post(`${this.urlProduto}/relProd`, {frequencia, start, end});
  }

  solicitacoesPagasRel(frequencia: string, start, end) {
    return this.http.post(`${this.url}/solicitacoesPagasRel`, {frequencia, start, end});
  }

  solicitacoesOutrasRel(frequencia: string, start, end) {
    return this.http.post(`${this.url}/solicitacoesOutrasRel`, {frequencia, start, end});
  }

  buscarSolicitacoesGeral(filtro, pageNumber: number, nPerPage: number) {
    return this.http.post<{
        solicitacoes: any[],
        count: number,
        permissoes: string[],
      }>(`${this.url}/buscarGeral`, {filtro, pageNumber, nPerPage});
  }

  alterarStatus(solicitacoes: string[], status: EStatusSolicitacao, cancelamento: {cancelado: boolean, justificativa: string}) {
    return this.http.post(`${this.url}/alterar-status`, {solicitacoes, status, cancelamento});
  }

  usuariosSelect() {
    return this.http.get(`${SECURED_URL}/user/select`);
  }

  cancelar(solicitacaoId) {
    return this.http.post(`${this.url}/solicitarCancelamento`, {solicitacaoId});
  }

  relatorio(frequencia: 'mes' | 'semana' | 'ano') {
    return this.http.post(`${this.url}/relatorio`, {frequencia});
  }

  validarTelaAdmin() {
    return this.http.get<{autorizado: boolean}>(`${this.url}/validarTela`);
  }
  validarTelaRelatorio() {
    return this.http.get<{autorizado: boolean}>(`${this.url}/validarTelaRelatorio`);
  }
}
