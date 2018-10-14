import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdLoaderComponent } from './bird-loader.component';

describe('BirdLoaderComponent', () => {
  let component: BirdLoaderComponent;
  let fixture: ComponentFixture<BirdLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
