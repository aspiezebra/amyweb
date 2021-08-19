import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuntsAndUnclesComponent } from './aunts-and-uncles.component';

describe('AuntsAndUnclesComponent', () => {
  let component: AuntsAndUnclesComponent;
  let fixture: ComponentFixture<AuntsAndUnclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuntsAndUnclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuntsAndUnclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
