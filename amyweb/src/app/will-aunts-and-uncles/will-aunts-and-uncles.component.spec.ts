import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WillAuntsAndUnclesComponent } from './will-aunts-and-uncles.component';

describe('WillAuntsAndUnclesComponent', () => {
  let component: WillAuntsAndUnclesComponent;
  let fixture: ComponentFixture<WillAuntsAndUnclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WillAuntsAndUnclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WillAuntsAndUnclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
