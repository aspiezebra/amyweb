import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepApneaComponent } from './sleep-apnea.component';

describe('SleepApneaComponent', () => {
  let component: SleepApneaComponent;
  let fixture: ComponentFixture<SleepApneaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepApneaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepApneaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
