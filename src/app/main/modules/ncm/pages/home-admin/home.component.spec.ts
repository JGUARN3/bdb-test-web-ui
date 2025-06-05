import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { provideMockStore } from "@ngrx/store/testing";
import { ListBoxService } from "../../../shared/services/list-box/list-box.service";
import { CommonModule } from "@angular/common";
import { NewComponent } from "../../../collaborator/new/new.component";
import { AccessComponent } from "../../../collaborator/access/access.component";
import { EquipmentComponent } from "../../../collaborator/equipment/equipment.component";
import { HttpClient } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { ListCollaboratorsService } from "../../../shared/services/list-collaborators/list-collaborators.service";
import { NewCollaboratorsService } from "../../../shared/services/new-collaborators/new-collaborators.service";
import { AccessService } from "../../../shared/services/access/access.service";
import { EquipmentService } from "../../../shared/services/equipment/equipment.service";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'ncm', component: HomeComponent },
        ]),
      ],
      providers: [CommonModule,
        NewComponent,
        AccessComponent,
        EquipmentComponent,
        ListBoxService,
        HttpClient,
        HttpHandler,
        NewCollaboratorsService,
        ListCollaboratorsService,
        AccessService,
        EquipmentService,
        provideMockStore({})],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should session load', async () => {
    expect(component).toBeTruthy();
  });
});
