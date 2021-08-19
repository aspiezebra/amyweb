import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HenochschonleinpurpuraComponent } from './henochschonleinpurpura.component';

describe('HenochschonleinpurpuraComponent', () => {
  let component: HenochschonleinpurpuraComponent;
  let fixture: ComponentFixture<HenochschonleinpurpuraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HenochschonleinpurpuraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HenochschonleinpurpuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
