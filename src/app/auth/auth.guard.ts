import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map, catchError, retry } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

   canActivate(): Observable<boolean> {
    return this.authService.loggedIn().pipe(map(res => {
      if (!res.valid) {
        this.router.navigate(['/auth/login']);
        return false;
      }
      return true;
    }), catchError(err => {
      this.router.navigate(['/login']);
      return of(false);
    }));
  }
}
