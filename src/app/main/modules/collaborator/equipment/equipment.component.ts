import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ListBoxService } from "../../shared/services/list-box/list-box.service";
import { ListCollaboratorsService } from "../../shared/services/list-collaborators/list-collaborators.service";
import { NewCollaboratorsService } from "../../shared/services/new-collaborators/new-collaborators.service";
import { EquipmentService } from "../../shared/services/equipment/equipment.service";


@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  standalone: true,
  styleUrls: ['./equipment.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class EquipmentComponent implements OnInit {
  listBox = [];
  listEquipments = [];
  available = `${this.listBox.length} equipos disponibles`;
  listCollaborators = [];
  disabled = 'FALSE';
  equipment: number;
  user: number;
  headers: HeadersInit = {
    'X-Name': 'NCM',
    'X-Channel': 'Web'
  };

  constructor(private readonly listBoxService: ListBoxService,
              private readonly listCollaboratorsService: ListCollaboratorsService,
              private readonly equipmentService: EquipmentService,) {
  }

  public ngOnInit(): void {
    this.load_collaborators();
  }

  validate_field() {
    if (this.equipment >= 0 && this.equipment >= 0) {
      console.log(this.disabled);
      this.disabled = '';
    } else {
      this.disabled = 'FALSE';
    }
  }

  load_collaborators() {
    this.listBoxService.getEquipment(this.headers).subscribe((listBoxes: any) => {
      this.listBox = listBoxes.map((item: any) => {
        return { text: item.name_equipment, value: Number(item.id) };
      })
      this.available = `${this.listBox.length} equipos disponibles`;
    });
    this.equipmentService.getEquipmentsList(this.headers).subscribe((listEquipments: any) => {
      this.listEquipments = listEquipments.map((item: any) => {
        return {
          id: item.id,
          Simple0: item.name,
          Simple1: item.email,
          Simple2: item.name_equipment,
          Simple3: item.description,
          Estado4: { type: item.status === 1 ? 'success' : 'warning', text: item.status === 1 ? 'Activo' : 'Inactivo' },
          action5: "true"
        };
      })
    });
    this.listCollaboratorsService.getList(this.headers).subscribe(async (listCollaborators: any) => {
      this.listCollaborators = await listCollaborators.map((item: any) => {
        return { text: item.email, value: Number(item.user_id) };
      });
    });
  }

  saveCollaboratorEquipment() {
    const body = {
      user: this.user,
      equipment: this.equipment,
    };
    this.equipmentService.newCollaborator(this.headers, body).subscribe({
      next: async (res: any) => {
        this.load_collaborators();
      },
      error: async (_err) => {
        console.log(_err)
      }
    });
    this.listCollaborators = [];
    this.validate_field();
  }

  setUser(e: any) {
    this.user = e.detail.value;
    this.validate_field();
  }

  setEquipment(e: any) {
    this.equipment = e.detail.value;
    this.validate_field();
  }

  action($event: any) {
    const body = {
      id: $event.detail.data.id
    }
    console.log(body);
    this.equipmentService.deleteEquipments(this.headers, body).subscribe({
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
