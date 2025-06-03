import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthComponent } from './auth.component';
import { AppRoutingModule } from "../../../../../app-routing.module";
import { DispatcherService } from "../../../shared/services/dispatcher/dispatcher.service";
import { provideMockStore } from "@ngrx/store/testing";
import { HttpClient } from "@angular/common/http";
import { HttpRequestService } from "../../../../../store/shared/services/http-request/http-request.service";
import { HttpHandler } from "@angular/common/http";

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
      ],
      providers: [
        DispatcherService,
        HttpRequestService,
        HttpClient,
        HttpHandler,
        provideMockStore({})],
    }).compileComponents();
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should session load', async () => {
    expect(component).toBeTruthy();
  });
});
