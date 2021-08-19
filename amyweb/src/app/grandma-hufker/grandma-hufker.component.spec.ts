import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandmaHufkerComponent } from './grandma-hufker.component';

describe('GrandmaHufkerComponent', () => {
  let component: GrandmaHufkerComponent;
  let fixture: ComponentFixture<GrandmaHufkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandmaHufkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandmaHufkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
