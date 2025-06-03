import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:  'root'
})
export class HttpRequestService<T> {

  constructor(private http: HttpClient) { }

  public request(url: string, method?: any, params?: any, headers?: any): Observable<any> {
    if (!params) {
      params = {};
    }
    let result: any;
    switch (method) {
      case 'post':
        const options = {
          headers: headers
        };
        result = this.http.post<T>(url, params, options);
        break;
      case 'get':
      default:
        const optionsGet = {
          params: params,
          headers: headers
        };
        result = this.http.get<T>(url, optionsGet);
        break;
    }
    return result;
  }
}
