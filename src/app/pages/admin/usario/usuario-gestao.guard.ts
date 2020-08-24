import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioGestaoGuard implements CanActivate {
  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
  ) {}

   canActivate(): Observable<boolean> {
    return this.usuarioService.validarTela().pipe(map(res => {
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
