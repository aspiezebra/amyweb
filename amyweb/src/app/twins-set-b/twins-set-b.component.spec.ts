import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwinsSetBComponent } from './twins-set-b.component';

describe('TwinsSetBComponent', () => {
  let component: TwinsSetBComponent;
  let fixture: ComponentFixture<TwinsSetBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwinsSetBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwinsSetBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
