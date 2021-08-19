import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandpaHufkerComponent } from './grandpa-hufker.component';

describe('GrandpaHufkerComponent', () => {
  let component: GrandpaHufkerComponent;
  let fixture: ComponentFixture<GrandpaHufkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandpaHufkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandpaHufkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
