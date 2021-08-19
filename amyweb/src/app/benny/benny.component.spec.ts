import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BennyComponent } from './benny.component';

describe('BennyComponent', () => {
  let component: BennyComponent;
  let fixture: ComponentFixture<BennyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BennyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BennyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
