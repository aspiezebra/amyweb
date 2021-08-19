import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmysAcuteDiagnosesComponent } from './amys-acute-diagnoses.component';

describe('AmysAcuteDiagnosesComponent', () => {
  let component: AmysAcuteDiagnosesComponent;
  let fixture: ComponentFixture<AmysAcuteDiagnosesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmysAcuteDiagnosesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmysAcuteDiagnosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
