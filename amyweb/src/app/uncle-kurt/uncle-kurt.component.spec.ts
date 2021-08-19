import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncleKurtComponent } from './uncle-kurt.component';

describe('UncleKurtComponent', () => {
  let component: UncleKurtComponent;
  let fixture: ComponentFixture<UncleKurtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncleKurtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncleKurtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
