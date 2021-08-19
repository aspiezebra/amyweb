import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HufkerAuntsAndUnclesComponent } from './hufker-aunts-and-uncles.component';

describe('HufkerAuntsAndUnclesComponent', () => {
  let component: HufkerAuntsAndUnclesComponent;
  let fixture: ComponentFixture<HufkerAuntsAndUnclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HufkerAuntsAndUnclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HufkerAuntsAndUnclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
