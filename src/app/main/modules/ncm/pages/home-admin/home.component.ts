import { Component } from '@angular/core';
import { ViewChild, ElementRef } from "@angular/core";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { OnInit } from "@angular/core";
import { LoaderService } from "../../../shared/services/loader/loader.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { menuItems } from "../../../../model/sidebar.model";
import { CommonModule } from "@angular/common";
import { NewComponent } from "../../../collaborator/new/new.component";
import { AccessComponent } from "../../../collaborator/access/access.component";
import { EquipmentComponent } from "../../../collaborator/equipment/equipment.component";

@Component({
  selector: 'app-component',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [CommonModule, NewComponent, AccessComponent, EquipmentComponent],
})
export class HomeComponent implements OnInit {
  @ViewChild('container') container: ElementRef;
  sidebarItems = menuItems;
  collaboratorFlow = true;
  accessFlow = false;
  equipmentFlow = false;
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
    if (e.detail.item.label === menuItems[0].label) {
      this.collaboratorFlow = true;
      this.accessFlow = false;
      this.equipmentFlow = false;
    } else if (e.detail.item.label === menuItems[1].label) {
      this.collaboratorFlow = false;
      this.accessFlow = true;
      this.equipmentFlow = false;
    } else if (e.detail.item.label === menuItems[2].label) {
      this.collaboratorFlow = false;
      this.accessFlow = false;
      this.equipmentFlow = true;
    } else if (e.detail.item.label === menuItems[3].label) {
      sessionStorage.clear();
      this.router.navigate(['/']);
    }
  }
}
