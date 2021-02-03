import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("INTERCEPTOR" + sessionStorage.getItem('username') + sessionStorage.getItem('token'));
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      console.log(sessionStorage.getItem('username') + sessionStorage.getItem('token'));
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token')
        }
      });
    }
    console.log(req);
    return next.handle(req);

  }
}
