import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodUncleDeanComponent } from './god-uncle-dean.component';

describe('GodUncleDeanComponent', () => {
  let component: GodUncleDeanComponent;
  let fixture: ComponentFixture<GodUncleDeanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodUncleDeanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodUncleDeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
