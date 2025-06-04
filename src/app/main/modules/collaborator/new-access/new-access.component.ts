import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AccessService } from "../../shared/services/access/access.service";
import { ListBoxService } from "../../shared/services/list-box/list-box.service";


@Component({
  selector: 'app-new-access',
  templateUrl: './new-access.component.html',
  standalone: true,
  styleUrls: ['./new-access.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class NewAccessComponent implements OnInit {
  listRequest = [];
  boxApplications = [];
  boxPermissions = [];
  disabled= 'TRUE'
  headers: HeadersInit = {
    'X-Name': 'NCM',
    'X-Channel': 'Web'
  };
  application: number;
  permission: number;
  user = JSON.parse(sessionStorage.getItem('user') || '{}');
  constructor(private readonly accessService: AccessService,
              private readonly listBoxService: ListBoxService) {
  }

  public ngOnInit(): void {
    this.listBoxService.getApplication(this.headers).subscribe((listBoxes: any) => {
      this.boxApplications = listBoxes.map((item: any) => {
        return { text: item.name_app, value: item.id };
      })
    });
    this.listBoxService.getPermission(this.headers).subscribe((listBoxes: any) => {
      this.boxPermissions = listBoxes.map((item: any) => {
        return { text: item.description, value: item.id };
      })
    });
    this.load_request();
  }

  saveRequest() {
    const body = {
      user: this.user.id,
      application: this.application,
      permission: this.permission
    };
    this.accessService.newRequest(this.headers, body).subscribe({
      next: async (res: any) => {
        console.log(res)
        this.load_request();
      },
      error: async (_err) => {
        console.log(_err)
      }
    });
  }

  setApp($event: any) {
    this.application = $event.detail.value;
    this.validate()
  }

  setPermission($event: any) {
    this.permission = $event.detail.value;
    this.validate()
  }

  validate() {
    if (this.permission >=0 && this.application >=0) {
      this.disabled = '';
    }else {
      this.disabled = 'TRUE';
    }
  }

  private load_request() {
    this.accessService.getRequest(this.headers).subscribe(async (request: any) => {
      const listMyRequest = request.filter((item: any) => item.user_id === this.user.id);
      this.listRequest = await listMyRequest.map((item: any) => {
        return {
          id: item.id,
          Fecha: new Date(item.assignment_permissions_date).toLocaleDateString(),
          Simple3: item.description,
          Simple4: item.name_app,
          Estado5: { type: item.status_permission === 1 ? 'success' : 'warning', text: item.status_permission === 1 ? 'Activos' : 'Pendientes' }
        };
      });
    });
  }
}
