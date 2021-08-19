import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncleJeffComponent } from './uncle-jeff.component';

describe('UncleJeffComponent', () => {
  let component: UncleJeffComponent;
  let fixture: ComponentFixture<UncleJeffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncleJeffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncleJeffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
