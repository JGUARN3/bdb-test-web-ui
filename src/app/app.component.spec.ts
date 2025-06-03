import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideMockStore } from '@ngrx/store/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from "@angular/router";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), RouterModule],
      declarations: [AppComponent],
      providers: [provideMockStore({})],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have as title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mfe');
  });
});
