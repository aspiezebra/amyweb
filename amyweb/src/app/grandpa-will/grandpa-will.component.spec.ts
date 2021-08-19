import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandpaWillComponent } from './grandpa-will.component';

describe('GrandpaWillComponent', () => {
  let component: GrandpaWillComponent;
  let fixture: ComponentFixture<GrandpaWillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandpaWillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandpaWillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
