import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ListBoxService } from "../../shared/services/list-box/list-box.service";
import { ListCollaboratorsService } from "../../shared/services/list-collaborators/list-collaborators.service";
import { NewCollaboratorsService } from "../../shared/services/new-collaborators/new-collaborators.service";


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  standalone: true,
  styleUrls: ['./new.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class NewComponent implements OnInit {
  listBox = [];
  listCollaborators = [];
  disabled = 'FALSE';
  name: string = '';
  email: string = '';
  area: number;
  headers: HeadersInit = {
    'X-Name': 'NCM',
    'X-Channel': 'Web'
  };

  constructor(private readonly listBoxService: ListBoxService,
              private readonly listCollaboratorsService: ListCollaboratorsService,
              private readonly newCollaboratorsService: NewCollaboratorsService,) {
  }

  public ngOnInit(): void {
    this.listBoxService.getArea(this.headers).subscribe((listBoxes: any) => {
      this.listBox = listBoxes.map((item: any) => {
        return { text: item.name_area, value: item.id };
      })
    });
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
      this.listCollaborators = await listCollaborators.map((item: any) => {
        return {
          id: item.user_id,
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
