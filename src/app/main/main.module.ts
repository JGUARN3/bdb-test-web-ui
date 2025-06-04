import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './modules/ncm/pages/home-admin/home.component';
import { SharedModule } from './modules/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { InterceptorService } from "../store/shared/services/interceptor/interceptor.service";
import { DispatcherService } from "./modules/shared/services/dispatcher/dispatcher.service";
import { HttpRequestService } from "../store/shared/services/http-request/http-request.service";
import { ListBoxService } from "./modules/shared/services/list-box/list-box.service";
import { ListCollaboratorsService } from "./modules/shared/services/list-collaborators/list-collaborators.service";
import { NewCollaboratorsService } from "./modules/shared/services/new-collaborators/new-collaborators.service";
import { EquipmentService } from "./modules/shared/services/equipment/equipment.service";
import { AccessService } from "./modules/shared/services/access/access.service";

@NgModule({
  declarations: [],
  imports: [CommonModule, MainRoutingModule, RouterModule, SharedModule, HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    DispatcherService,
    HttpRequestService,
    ListBoxService,
    ListCollaboratorsService,
    NewCollaboratorsService,
    EquipmentService,
    AccessService
  ]
})
export class MainModule {}
