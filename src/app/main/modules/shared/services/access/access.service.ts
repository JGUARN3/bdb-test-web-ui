import { Injectable } from "@angular/core";
import { HttpRequestService } from "../../../../../store/shared/services/http-request/http-request.service";
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment.dev";


@Injectable()
export class AccessService {
  constructor(private readonly httpRequest: HttpRequestService<AccessService>) {
  }

  public newRequest(headers: HeadersInit, body: any): Observable<any> {
    const url = `${environment.endpoint}${environment.insertRequest}`;
    return this.httpRequest.request(
      url,
      'post',
      body,
      headers,
    );
  }

  public getRequest(headers: HeadersInit): Observable<any> {
    const url = `${environment.endpoint}${environment.getRequests}`;
    return this.httpRequest.request(
      url,
      'get',
      headers,
    );
  }

  public updateEquipments(headers: HeadersInit, body: any): Observable<any> {
    const url = `${environment.endpoint}${environment.updateRequest}`;
    return this.httpRequest.request(
      url,
      'post',
      body,
      headers,
    );
  }
}
