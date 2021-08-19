import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodAuntsAndUnclesComponent } from './god-aunts-and-uncles.component';

describe('GodAuntsAndUnclesComponent', () => {
  let component: GodAuntsAndUnclesComponent;
  let fixture: ComponentFixture<GodAuntsAndUnclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodAuntsAndUnclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodAuntsAndUnclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
