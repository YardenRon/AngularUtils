import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyingManLoaderComponent } from './flying-man-loader.component';

describe('FlyingManLoaderComponent', () => {
  let component: FlyingManLoaderComponent;
  let fixture: ComponentFixture<FlyingManLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyingManLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyingManLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
