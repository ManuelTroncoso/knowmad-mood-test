import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, finalize } from 'rxjs/operators';
import { HeroesIsLoading } from '../../store/heroes.actions';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private store: Store, private snackBar: MatSnackBar) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.store.dispatch(HeroesIsLoading());

    return next.handle(request).pipe(
      delay(500),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        this.snackBar.open(errorMessage, 'Cerrar', {
          duration: 3000,
        });
        return throwError(() => new Error(errorMessage));
      }),
      finalize(() => {})
    );
  }
}
