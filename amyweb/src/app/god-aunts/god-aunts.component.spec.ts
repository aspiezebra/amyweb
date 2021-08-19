import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodAuntsComponent } from './god-aunts.component';

describe('GodAuntsComponent', () => {
  let component: GodAuntsComponent;
  let fixture: ComponentFixture<GodAuntsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodAuntsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodAuntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
