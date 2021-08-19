import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmysPetsComponent } from './amys-pets.component';

describe('AmysPetsComponent', () => {
  let component: AmysPetsComponent;
  let fixture: ComponentFixture<AmysPetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmysPetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmysPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
