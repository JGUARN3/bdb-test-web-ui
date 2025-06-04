import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AccessService } from "../../shared/services/access/access.service";


@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  standalone: true,
  styleUrls: ['./access.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AccessComponent implements OnInit {
  listRequest = [];
  headers: HeadersInit = {
    'X-Name': 'NCM',
    'X-Channel': 'Web'
  };

  constructor(private readonly accessService: AccessService) {
  }

  public ngOnInit(): void {
    this.load();
  }

  load() {
    this.accessService.getRequest(this.headers).subscribe(async (request: any) => {
      this.listRequest = await request.map((item: any) => {
        return {
          id: item.id,
          Simple0: item.name,
          Simple1: item.email,
          Fecha: new Date(item.assignment_permissions_date).toLocaleDateString(),
          Simple3: item.description,
          Simple4: item.name_app,
          Estado5: { type: item.status_permission === 1 ? 'success' : 'warning', text: item.status_permission === 1 ? 'Activos' : 'Pendientes' },
          action6: "true"
        };
      });
    });
  }

  action($event: any) {
    console.log($event);
    const body = {
      id: $event.detail.data.id,
      status: $event.detail.data.Estado5.text === 'Pendientes' ? 1 : 0,
    }
    console.log(body);
    this.accessService.updateEquipments(this.headers, body).subscribe({
      next: async (res: any) => {
        console.log(res);
        this.load();
      },
      error: async (_err) => {
        console.log(_err)
      }
    });
  }

  saveRequest() {

  }
}
