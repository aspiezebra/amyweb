import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncleDanComponent } from './uncle-dan.component';

describe('UncleDanComponent', () => {
  let component: UncleDanComponent;
  let fixture: ComponentFixture<UncleDanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncleDanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncleDanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
