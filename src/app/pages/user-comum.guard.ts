import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsuarioService } from './admin/usario/usuario.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserComumGuard implements CanActivate {
  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
  ) {}

   canActivate(): Observable<boolean> {
    return this.usuarioService.validaTelaNotUserComum().pipe(map(res => {
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
