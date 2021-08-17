import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwosetsoftwinsComponent } from './twosetsoftwins.component';

describe('TwosetsoftwinsComponent', () => {
  let component: TwosetsoftwinsComponent;
  let fixture: ComponentFixture<TwosetsoftwinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwosetsoftwinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwosetsoftwinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
