import { Injectable } from "@angular/core";
import { HttpRequestService } from "../../../../../store/shared/services/http-request/http-request.service";
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment.dev";


@Injectable()
export class EquipmentService {
  constructor(private readonly httpRequest: HttpRequestService<EquipmentService>) {
  }

  public newCollaborator(headers: HeadersInit, body: any): Observable<any> {
    const url = `${environment.endpoint}${environment.newCollaboratorEquipments}`;
    return this.httpRequest.request(
      url,
      'post',
      body,
      headers,
    );
  }

  public getEquipmentsList(headers: HeadersInit): Observable<any> {
    const url = `${environment.endpoint}${environment.getEquipmentsList}`;
    return this.httpRequest.request(
      url,
      'get',
      headers,
    );
  }

  public deleteEquipments(headers: HeadersInit, body: any): Observable<any> {
    const url = `${environment.endpoint}${environment.deleteEquipments}`;
    return this.httpRequest.request(
      url,
      'post',
      body,
      headers,
    );
  }
}
