import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmyParentsComponent } from './amy-parents.component';

describe('AmyParentsComponent', () => {
  let component: AmyParentsComponent;
  let fixture: ComponentFixture<AmyParentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmyParentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmyParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
