import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HufkerAuntsComponent } from './hufker-aunts.component';

describe('HufkerAuntsComponent', () => {
  let component: HufkerAuntsComponent;
  let fixture: ComponentFixture<HufkerAuntsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HufkerAuntsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HufkerAuntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
