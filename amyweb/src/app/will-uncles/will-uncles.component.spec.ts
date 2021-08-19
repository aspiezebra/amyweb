import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WillUnclesComponent } from './will-uncles.component';

describe('WillUnclesComponent', () => {
  let component: WillUnclesComponent;
  let fixture: ComponentFixture<WillUnclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WillUnclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WillUnclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
