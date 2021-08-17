import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmyElizabethRoseHufkerComponent } from './amy-elizabeth-rose-hufker.component';

describe('AmyElizabethRoseHufkerComponent', () => {
  let component: AmyElizabethRoseHufkerComponent;
  let fixture: ComponentFixture<AmyElizabethRoseHufkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmyElizabethRoseHufkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmyElizabethRoseHufkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
