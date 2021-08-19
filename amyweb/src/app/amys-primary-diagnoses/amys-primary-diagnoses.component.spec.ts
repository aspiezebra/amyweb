import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmysPrimaryDiagnosesComponent } from './amys-primary-diagnoses.component';

describe('AmysPrimaryDiagnosesComponent', () => {
  let component: AmysPrimaryDiagnosesComponent;
  let fixture: ComponentFixture<AmysPrimaryDiagnosesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmysPrimaryDiagnosesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmysPrimaryDiagnosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
