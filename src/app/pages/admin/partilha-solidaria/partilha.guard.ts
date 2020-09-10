import { PartilhaSolidariaService } from './../../partilha-solidaria/partilha-solidaria.service';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PartilhaGuard implements CanActivate {
  constructor(
    private partilhaService: PartilhaSolidariaService,
    private router: Router,
  ) {}

   canActivate(): Observable<boolean> {
    return this.partilhaService.validarTelaAdmin().pipe(map(res => {
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
