import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmysGeneticDiagnosesComponent } from './amys-genetic-diagnoses.component';

describe('AmysGeneticDiagnosesComponent', () => {
  let component: AmysGeneticDiagnosesComponent;
  let fixture: ComponentFixture<AmysGeneticDiagnosesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmysGeneticDiagnosesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmysGeneticDiagnosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
