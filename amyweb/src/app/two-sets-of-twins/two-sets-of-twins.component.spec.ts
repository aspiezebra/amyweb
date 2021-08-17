import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoSetsOfTwinsComponent } from './two-sets-of-twins.component';

describe('TwoSetsOfTwinsComponent', () => {
  let component: TwoSetsOfTwinsComponent;
  let fixture: ComponentFixture<TwoSetsOfTwinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoSetsOfTwinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoSetsOfTwinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
