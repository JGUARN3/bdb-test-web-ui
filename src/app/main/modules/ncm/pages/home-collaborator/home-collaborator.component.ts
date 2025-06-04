import { Component } from '@angular/core';
import { ViewChild, ElementRef } from "@angular/core";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { OnInit } from "@angular/core";
import { LoaderService } from "../../../shared/services/loader/loader.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { menuItemsCollaborator } from "../../../../model/sidebar.model";
import { AccessComponent } from "../../../collaborator/access/access.component";
import { EquipmentComponent } from "../../../collaborator/equipment/equipment.component";
import { NewComponent } from "../../../collaborator/new/new.component";
import { NgIf } from "@angular/common";
import { NewAccessComponent } from "../../../collaborator/new-access/new-access.component";
import { EquipmentUserComponent } from "../../../collaborator/equipment-user/equipment-user.component";

@Component({
  selector: 'app-component',
  standalone: true,
  templateUrl: './home-collaborator.component.html',
  styleUrls: ['./home-collaborator.component.scss'],
  imports: [
    AccessComponent,
    EquipmentComponent,
    NewComponent,
    NgIf,
    NewAccessComponent,
    EquipmentUserComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeCollaboratorComponent implements OnInit {
  @ViewChild('container') container: ElementRef;
  sidebarItems = menuItemsCollaborator;
  equipmentFlow = true;
  accessFlow = false;

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly loaderService: LoaderService
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.loaderService.hide();
  }

  contentView(e: any) {
    if (e.detail.item.label === menuItemsCollaborator[0].label) {
      this.accessFlow = false;
      this.equipmentFlow = true;
    } else if (e.detail.item.label === menuItemsCollaborator[1].label) {
      this.accessFlow = true;
      this.equipmentFlow = false;
    } else if (e.detail.item.label === menuItemsCollaborator[2].label) {
      sessionStorage.clear();
      this.router.navigate(['/']);
    }
  }
}
