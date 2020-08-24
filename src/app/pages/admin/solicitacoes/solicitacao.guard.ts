import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SolicitacaoProdutoService } from '../../solicitacao-produto/solicitacao-produto.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoGuard implements CanActivate {
  constructor(
    private solicitacaoService: SolicitacaoProdutoService,
    private router: Router,
  ) {}

   canActivate(): Observable<boolean> {
    return this.solicitacaoService.validarTelaAdmin().pipe(map(res => {
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
