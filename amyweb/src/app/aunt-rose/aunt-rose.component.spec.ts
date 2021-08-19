import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuntRoseComponent } from './aunt-rose.component';

describe('AuntRoseComponent', () => {
  let component: AuntRoseComponent;
  let fixture: ComponentFixture<AuntRoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuntRoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuntRoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
