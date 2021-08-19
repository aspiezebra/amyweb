import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodGrandmaLesinskiComponent } from './god-grandma-lesinski.component';

describe('GodGrandmaLesinskiComponent', () => {
  let component: GodGrandmaLesinskiComponent;
  let fixture: ComponentFixture<GodGrandmaLesinskiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodGrandmaLesinskiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodGrandmaLesinskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
