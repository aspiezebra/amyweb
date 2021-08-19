import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodUnclesComponent } from './god-uncles.component';

describe('GodUnclesComponent', () => {
  let component: GodUnclesComponent;
  let fixture: ComponentFixture<GodUnclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodUnclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodUnclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
