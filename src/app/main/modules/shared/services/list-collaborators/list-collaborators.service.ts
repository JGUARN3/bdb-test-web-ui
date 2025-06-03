import { Injectable } from "@angular/core";
import { HttpRequestService } from "../../../../../store/shared/services/http-request/http-request.service";
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment.dev";


@Injectable()
export class ListCollaboratorsService {
  constructor(private readonly httpRequest: HttpRequestService<ListCollaboratorsService>) {
  }

  public getList(headers: HeadersInit): Observable<any> {
    const url = `${environment.endpoint}${environment.getCollaborators}`;
    return this.httpRequest.request(
      url,
      'get',
      headers
    );
  }
}
