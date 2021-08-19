import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmysPhysicalDiagnosesComponent } from './amys-physical-diagnoses.component';

describe('AmysPhysicalDiagnosesComponent', () => {
  let component: AmysPhysicalDiagnosesComponent;
  let fixture: ComponentFixture<AmysPhysicalDiagnosesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmysPhysicalDiagnosesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmysPhysicalDiagnosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
