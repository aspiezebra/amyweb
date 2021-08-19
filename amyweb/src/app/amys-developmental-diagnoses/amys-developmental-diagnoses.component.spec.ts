import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmysDevelopmentalDiagnosesComponent } from './amys-developmental-diagnoses.component';

describe('AmysDevelopmentalDiagnosesComponent', () => {
  let component: AmysDevelopmentalDiagnosesComponent;
  let fixture: ComponentFixture<AmysDevelopmentalDiagnosesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmysDevelopmentalDiagnosesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmysDevelopmentalDiagnosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
