import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmysDiagnosesComponent } from './amys-diagnoses.component';

describe('AmysDiagnosesComponent', () => {
  let component: AmysDiagnosesComponent;
  let fixture: ComponentFixture<AmysDiagnosesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmysDiagnosesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmysDiagnosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
