import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { environment } from 'environment';
import { Observable } from 'rxjs';

export function ApiInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const modifiedReq = req.clone({
    url: `${environment.baseUrl}${req.url}`,
    setHeaders: {
      Authorization: `Bearer ${environment.apiKey}`
    },
  });
  return next(modifiedReq);
}
