import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private _cache: Map<
    string,
    {
      expireDate: Date;
      response: HttpResponse<any>;
    }
  > = new Map();

  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    const cachedResponse = this._cache.get(request.url);

    if (cachedResponse && cachedResponse.expireDate <= new Date()) {
      this._cache.delete(request.url);
      return this._sendRequest(request, next);
    }

    return cachedResponse
      ? of(cachedResponse.response)
      : this._sendRequest(request, next);
  }

  private _sendRequest(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          const expireDate = new Date(Date.now() + 10 * 1000);
          this._cache.set(request.url, {
            expireDate: expireDate,
            response: event,
          });
        }
      })
    );
  }
}