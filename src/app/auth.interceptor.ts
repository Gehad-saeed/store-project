import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {

  }

  getToken(): any {
    return localStorage.getItem('userToken');
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${this.getToken()}`
          }
        });

    return next.handle(request);
  }

}
