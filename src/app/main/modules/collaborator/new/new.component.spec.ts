import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewComponent } from './new.component';
import { AppModule } from "../../../../app.module";
import { CommonModule } from "@angular/common";
import { ListBoxService } from "../../shared/services/list-box/list-box.service";
import { HttpClient } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { NewCollaboratorsService } from "../../shared/services/new-collaborators/new-collaborators.service";
import { ListCollaboratorsService } from "../../shared/services/list-collaborators/list-collaborators.service";
import { provideMockStore } from "@ngrx/store/testing";

describe('NewComponent', () => {
  let component: NewComponent;
  let fixture: ComponentFixture<NewComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      providers: [CommonModule,
        ListBoxService,
        HttpClient,
        HttpHandler,
        NewCollaboratorsService,
        ListCollaboratorsService,
        provideMockStore({})],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
