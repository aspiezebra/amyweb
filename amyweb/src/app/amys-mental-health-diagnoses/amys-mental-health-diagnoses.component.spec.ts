import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmysMentalHealthDiagnosesComponent } from './amys-mental-health-diagnoses.component';

describe('AmysMentalHealthDiagnosesComponent', () => {
  let component: AmysMentalHealthDiagnosesComponent;
  let fixture: ComponentFixture<AmysMentalHealthDiagnosesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmysMentalHealthDiagnosesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmysMentalHealthDiagnosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
