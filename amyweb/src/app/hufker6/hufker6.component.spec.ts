import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hufker6Component } from './hufker6.component';

describe('Hufker6Component', () => {
  let component: Hufker6Component;
  let fixture: ComponentFixture<Hufker6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hufker6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hufker6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
