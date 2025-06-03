import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorComponent } from './error.component';
import { BrowserModule } from '@angular/platform-browser';

describe('Shared module Error Component', () => {
  let app: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorComponent);
    app = fixture.componentInstance;
    app.bdbTpEmptyEstate = {
      nativeElement: {},
    };
    fixture.detectChanges();
  });

  it('should create error', () => {
    expect(app.btnRight).toEqual(true);
  });

});
