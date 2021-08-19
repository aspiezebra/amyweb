import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwinsSetAComponent } from './twins-set-a.component';

describe('TwinsSetAComponent', () => {
  let component: TwinsSetAComponent;
  let fixture: ComponentFixture<TwinsSetAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwinsSetAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwinsSetAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
