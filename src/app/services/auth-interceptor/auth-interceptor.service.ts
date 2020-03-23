import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = sessionStorage.getItem('currentUser');

    if (idToken) {
        const cloned = req.clone({
          headers: req.headers.set('Authorization', 'Bearer' + ' ' + sessionStorage.currentUser)
        });

        return next.handle(cloned)
        .pipe(
          catchError(this.isError)
        );
    } else {
        return next.handle(req);
      }
    }

    isError(error: HttpErrorResponse) {
      return throwError(error);
    }
}
