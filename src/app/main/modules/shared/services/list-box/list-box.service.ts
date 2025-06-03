import { Injectable } from "@angular/core";
import { HttpRequestService } from "../../../../../store/shared/services/http-request/http-request.service";
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment.dev";


@Injectable()
export class ListBoxService {
  constructor(private readonly httpRequest: HttpRequestService<ListBoxService>) {
  }

  public getArea(headers: HeadersInit): Observable<any> {
    const url = `${environment.endpoint}${environment.getArea}`;
    return this.httpRequest.request(
      url,
      'get',
      headers
    );
  }

  public getEquipment(headers: HeadersInit): Observable<any> {
    const url = `${environment.endpoint}${environment.getEquipments}`;
    return this.httpRequest.request(
      url,
      'get',
      headers
    );
  }
}
