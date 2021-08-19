import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HufkerUnclesComponent } from './hufker-uncles.component';

describe('HufkerUnclesComponent', () => {
  let component: HufkerUnclesComponent;
  let fixture: ComponentFixture<HufkerUnclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HufkerUnclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HufkerUnclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
