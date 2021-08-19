import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodAuntMichelleComponent } from './god-aunt-michelle.component';

describe('GodAuntMichelleComponent', () => {
  let component: GodAuntMichelleComponent;
  let fixture: ComponentFixture<GodAuntMichelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodAuntMichelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodAuntMichelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
