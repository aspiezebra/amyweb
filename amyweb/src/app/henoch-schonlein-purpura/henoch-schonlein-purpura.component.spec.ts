import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HenochSchonleinPurpuraComponent } from './henoch-schonlein-purpura.component';

describe('HenochSchonleinPurpuraComponent', () => {
  let component: HenochSchonleinPurpuraComponent;
  let fixture: ComponentFixture<HenochSchonleinPurpuraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HenochSchonleinPurpuraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HenochSchonleinPurpuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
