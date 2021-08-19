import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncleKennyComponent } from './uncle-kenny.component';

describe('UncleKennyComponent', () => {
  let component: UncleKennyComponent;
  let fixture: ComponentFixture<UncleKennyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncleKennyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncleKennyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
