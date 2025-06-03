import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { LoaderService } from '../loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  private totalRequests = 0;

  constructor(private readonly loaderService: LoaderService) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.totalRequests === 0) {
      this.loaderService.show();
    }
    this.totalRequests++;
    return next.handle(req).pipe(
      filter((e) => e.type !== 0),
      map((event: HttpEvent<HttpResponse<any>>) => {
        return event;
      })).pipe(finalize(() => this.decreaseRequests()));
  }

  private decreaseRequests() {
    this.totalRequests--;
  }
}
