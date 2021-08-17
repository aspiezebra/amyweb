import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { REMSleepBehaviorDisorderComponent } from './remsleep-behavior-disorder.component';

describe('REMSleepBehaviorDisorderComponent', () => {
  let component: REMSleepBehaviorDisorderComponent;
  let fixture: ComponentFixture<REMSleepBehaviorDisorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ REMSleepBehaviorDisorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(REMSleepBehaviorDisorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
