import { Injectable } from "@angular/core";
import { HttpRequestService } from "../../../../../store/shared/services/http-request/http-request.service";
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment.dev";


@Injectable()
export class NewCollaboratorsService {
  constructor(private readonly httpRequest: HttpRequestService<NewCollaboratorsService>) {
  }

  public newCollaborator(headers: HeadersInit, body: any): Observable<any> {
    const url = `${environment.endpoint}${environment.newCollaborator}`;
    return this.httpRequest.request(
      url,
      'post',
      body,
      headers,
    );
  }

  public updateCollaborator(headers: HeadersInit, body: any): Observable<any> {
    const url = `${environment.endpoint}${environment.updateCollaborators}`;
    return this.httpRequest.request(
      url,
      'post',
      body,
      headers,
    );
  }

  public deleteCollaborator(headers: HeadersInit, body: any): Observable<any> {
    const url = `${environment.endpoint}${environment.deleteCollaborator}`;
    return this.httpRequest.request(
      url,
      'post',
      body,
      headers,
    );
  }
}
