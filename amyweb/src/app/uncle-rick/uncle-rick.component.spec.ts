import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncleRickComponent } from './uncle-rick.component';

describe('UncleRickComponent', () => {
  let component: UncleRickComponent;
  let fixture: ComponentFixture<UncleRickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncleRickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncleRickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
