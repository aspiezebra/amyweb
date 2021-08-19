import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmysTwinComponent } from './amys-twin.component';

describe('AmysTwinComponent', () => {
  let component: AmysTwinComponent;
  let fixture: ComponentFixture<AmysTwinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmysTwinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmysTwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
