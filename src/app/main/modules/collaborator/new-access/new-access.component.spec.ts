import { NewAccessComponent } from "./new-access.component";
import { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";
import { AppModule } from "../../../../app.module";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { NewCollaboratorsService } from "../../shared/services/new-collaborators/new-collaborators.service";
import { ListCollaboratorsService } from "../../shared/services/list-collaborators/list-collaborators.service";
import { provideMockStore } from "@ngrx/store/testing";
import { ListBoxService } from "../../shared/services/list-box/list-box.service";
import { AccessService } from "../../shared/services/access/access.service";


describe('NewAccessComponent', () => {
  let component: NewAccessComponent;
  let fixture: ComponentFixture<NewAccessComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
      ],providers: [
        CommonModule,
        HttpClient,
        ListBoxService,
        HttpHandler,
        NewCollaboratorsService,
        ListCollaboratorsService,
        AccessService,
        provideMockStore({})],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
