import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmysBehavioralHealthDiagnosesComponent } from './amys-behavioral-health-diagnoses.component';

describe('AmysBehavioralHealthDiagnosesComponent', () => {
  let component: AmysBehavioralHealthDiagnosesComponent;
  let fixture: ComponentFixture<AmysBehavioralHealthDiagnosesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmysBehavioralHealthDiagnosesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmysBehavioralHealthDiagnosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
