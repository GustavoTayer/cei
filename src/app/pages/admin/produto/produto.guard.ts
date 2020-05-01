import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProdutoService } from './produto.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProdutoGuard implements CanActivate {
  constructor(
    private produtoService: ProdutoService,
    private router: Router,
  ) {}

   canActivate(): Observable<boolean> {
    return this.produtoService.validarTela().pipe(map(res => {
      console.log(res)
      if (!res.autorizado) {
        this.router.navigate(['/pages/403']);
        return false;
      }
      return true;
    }), catchError(err => {
      console.log(err)
      this.router.navigate(['/pages/403']);
      return of(false);
    }));
  }

}
