import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuntKathyComponent } from './aunt-kathy.component';

describe('AuntKathyComponent', () => {
  let component: AuntKathyComponent;
  let fixture: ComponentFixture<AuntKathyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuntKathyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuntKathyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
