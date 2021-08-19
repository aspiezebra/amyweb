import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodUncleTomComponent } from './god-uncle-tom.component';

describe('GodUncleTomComponent', () => {
  let component: GodUncleTomComponent;
  let fixture: ComponentFixture<GodUncleTomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodUncleTomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodUncleTomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
