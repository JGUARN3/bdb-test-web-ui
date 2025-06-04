import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ListBoxService } from "../../shared/services/list-box/list-box.service";
import { ListCollaboratorsService } from "../../shared/services/list-collaborators/list-collaborators.service";
import { NewCollaboratorsService } from "../../shared/services/new-collaborators/new-collaborators.service";
import { EquipmentService } from "../../shared/services/equipment/equipment.service";


@Component({
  selector: 'app-equipment-user',
  templateUrl: './equipment-user.component.html',
  standalone: true,
  styleUrls: ['./equipment-user.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class EquipmentUserComponent implements OnInit {
  listEquipments = [];
  headers: HeadersInit = {
    'X-Name': 'NCM',
    'X-Channel': 'Web'
  };

  constructor(private readonly equipmentService: EquipmentService,) {
  }

  public ngOnInit(): void {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    this.equipmentService.getEquipmentsList(this.headers).subscribe((listEquipments: any) => {
      const listMyEquipments = listEquipments.filter((item: any) => item.id === user.id);
      this.listEquipments = listMyEquipments.map((item: any) => {
        return {
          id: item.id,
          Simple0: item.name,
          Simple1: item.email,
          Simple2: item.name_equipment,
          Simple3: item.description,
          Estado4: { type: item.status === 1 ? 'success' : 'warning', text: item.status === 1 ? 'Activo' : 'Inactivo' }
        };
      })
    });
  }

}
