import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ListCollaboratorsService } from "../../shared/services/list-collaborators/list-collaborators.service";
import { NewCollaboratorsService } from "../../shared/services/new-collaborators/new-collaborators.service";


@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  standalone: true,
  styleUrls: ['./access.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AccessComponent implements OnInit {
  listCollaborators = [];
  disabled = 'FALSE';
  name: string = '';
  email: string = '';
  area: number;
  headers: HeadersInit = {
    'X-Name': 'NCM',
    'X-Channel': 'Web'
  };

  constructor(
              private readonly listCollaboratorsService: ListCollaboratorsService,
              private readonly newCollaboratorsService: NewCollaboratorsService,) {
  }

  public ngOnInit(): void {
    this.load_collaborators();
  }

  validate_field() {
    if (this.name !== '' && this.email !== '') {
      console.log(this.disabled);
      this.disabled = '';
    } else {
      this.disabled = 'FALSE';
    }
  }

  setName(e: any) {
    this.name = e.detail.value;
    this.validate_field();
  }

  setEmail(e: any) {
    this.email = e.detail.value;
    this.validate_field();
  }

  setArea(e: any) {
    this.area = e.detail.value;
    this.validate_field();
  }

  saveCollaborator() {
    const body = {
      name: this.name,
      email: this.email,
      area: this.area
    };
    this.newCollaboratorsService.newCollaborator(this.headers, body).subscribe({
      next: async (res: any) => {
        console.log(res)
        this.load_collaborators();
      },
      error: async (_err) => {
        console.log(_err)
      }
    });
    this.name = '';
    this.email = '';
    this.listCollaborators = [];
    this.validate_field();
  }

  load_collaborators() {
    this.listCollaboratorsService.getList(this.headers).subscribe(async (listCollaborators: any) => {
      let index = 0;
      this.listCollaborators = await listCollaborators.map((item: any) => {
        index++;
        return {
          id: index,
          Simple0: item.name,
          Simple1: item.email,
          Fecha: new Date(item.creation_date).toLocaleDateString(),
          Simple3: item.name_area,
          Estado4: { type: item.status === 1 ? 'success' : 'warning', text: item.status === 1 ? 'Activo' : 'Inactivo' },
          action5: "true"
        };
      });
    });
  }

  action($event: any) {
    console.log($event);
    const body = {
      id: $event.detail.data.id,
      status: $event.detail.data.Estado4.text === 'Activo' ? 2 : 1,
    }
    console.log(body);
    this.newCollaboratorsService.updateCollaborator(this.headers, body).subscribe({
      next: async (res: any) => {
        console.log(res)
        this.load_collaborators();
      },
      error: async (_err) => {
        console.log(_err)
      }
    });
  }
}
