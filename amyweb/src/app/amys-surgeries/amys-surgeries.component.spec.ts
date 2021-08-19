import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmysSurgeriesComponent } from './amys-surgeries.component';

describe('AmysSurgeriesComponent', () => {
  let component: AmysSurgeriesComponent;
  let fixture: ComponentFixture<AmysSurgeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmysSurgeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmysSurgeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
