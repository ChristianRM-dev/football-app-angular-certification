import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class FootBallInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const newRequest = request.clone(
      {
        url: `${environment.apiBaseUrl}${request.url}`,
        setHeaders:{
          'x-rapidapi-key': environment.apiKey,
        }
      }
    )

    return next.handle(newRequest);
  }
}
