import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoadingService } from '../loading.service';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  constructor(public ls: LoadingService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.ls.show();
    const token = localStorage.getItem('token');
    if (token) {
      request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }
    request = request.clone({ url: environment.apiUrl + request.url });
    return next.handle(request).pipe(finalize(() => this.ls.hide()));
  }
}
