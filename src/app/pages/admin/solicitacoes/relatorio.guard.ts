import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SolicitacaoProdutoService } from '../../solicitacao-produto/solicitacao-produto.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RelatorioGuard implements CanActivate {
  constructor(
    private solicitacaoService: SolicitacaoProdutoService,
    private router: Router,
  ) {}

   canActivate(): Observable<boolean> {
    return this.solicitacaoService.validarTelaRelatorio().pipe(map(res => {
      if (!res.autorizado) {
        this.router.navigate(['/pages/403']);
        return false;
      }
      return true;
    }), catchError(err => {
      this.router.navigate(['/pages/403']);
      return of(false);
    }));
  }

}
