import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimmyComponent } from './timmy.component';

describe('TimmyComponent', () => {
  let component: TimmyComponent;
  let fixture: ComponentFixture<TimmyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimmyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
