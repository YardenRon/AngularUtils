import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorfulSpinnerComponent } from './colorful-spinner.component';

describe('ColorfulSpinnerComponent', () => {
  let component: ColorfulSpinnerComponent;
  let fixture: ComponentFixture<ColorfulSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorfulSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorfulSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
