import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandmaWillComponent } from './grandma-will.component';

describe('GrandmaWillComponent', () => {
  let component: GrandmaWillComponent;
  let fixture: ComponentFixture<GrandmaWillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandmaWillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandmaWillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
