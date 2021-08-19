import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodAuntDebbieComponent } from './god-aunt-debbie.component';

describe('GodAuntDebbieComponent', () => {
  let component: GodAuntDebbieComponent;
  let fixture: ComponentFixture<GodAuntDebbieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodAuntDebbieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodAuntDebbieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
