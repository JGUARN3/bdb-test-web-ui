import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeCollaboratorComponent } from './home-collaborator.component';
import { provideMockStore } from "@ngrx/store/testing";
import { EquipmentService } from "../../../shared/services/equipment/equipment.service";
import { ListBoxService } from "../../../shared/services/list-box/list-box.service";
import { HttpClient } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";

describe('HomeCollaboratorComponent', () => {
  let component: HomeCollaboratorComponent;
  let fixture: ComponentFixture<HomeCollaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {path: 'ncm', component: HomeCollaboratorComponent},
        ]),
      ],
      providers: [
        ListBoxService,
        HttpClient,
        HttpHandler,
        EquipmentService,
        provideMockStore({})],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeCollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should session load', async () => {
    expect(component).toBeTruthy();
  });
});
