import {Injectable, Injector} from '@angular/core';
import {  HttpInterceptor} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    const authService = this.injector.get(AuthService);
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `${authService.getToken()}`,
      },
    });
    return next.handle(tokenizedReq);
  }
}
