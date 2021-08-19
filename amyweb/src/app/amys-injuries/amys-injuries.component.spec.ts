import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmysInjuriesComponent } from './amys-injuries.component';

describe('AmysInjuriesComponent', () => {
  let component: AmysInjuriesComponent;
  let fixture: ComponentFixture<AmysInjuriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmysInjuriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmysInjuriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
