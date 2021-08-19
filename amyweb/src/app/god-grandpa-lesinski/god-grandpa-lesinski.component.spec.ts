import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodGrandpaLesinskiComponent } from './god-grandpa-lesinski.component';

describe('GodGrandpaLesinskiComponent', () => {
  let component: GodGrandpaLesinskiComponent;
  let fixture: ComponentFixture<GodGrandpaLesinskiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodGrandpaLesinskiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodGrandpaLesinskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
