import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeCollaboratorComponent } from './home-collaborator.component';
import { provideMockStore } from "@ngrx/store/testing";

describe('HomeComponent', () => {
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
