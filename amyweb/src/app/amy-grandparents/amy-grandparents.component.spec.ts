import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmyGrandparentsComponent } from './amy-grandparents.component';

describe('AmyGrandparentsComponent', () => {
  let component: AmyGrandparentsComponent;
  let fixture: ComponentFixture<AmyGrandparentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmyGrandparentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmyGrandparentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
