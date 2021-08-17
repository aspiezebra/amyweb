import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadelungsDeformityComponent } from './madelungs-deformity.component';

describe('MadelungsDeformityComponent', () => {
  let component: MadelungsDeformityComponent;
  let fixture: ComponentFixture<MadelungsDeformityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadelungsDeformityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadelungsDeformityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
