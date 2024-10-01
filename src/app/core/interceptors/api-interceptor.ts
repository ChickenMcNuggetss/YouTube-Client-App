import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

export function ApiInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const modifiedReq = req.clone({
    url: `${environment.baseUrl}${req.url}`,
    setParams: {
      key: environment.apiKey
    }
  });
  return next(modifiedReq);
}
