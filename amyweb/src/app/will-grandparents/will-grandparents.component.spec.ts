import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WillGrandparentsComponent } from './will-grandparents.component';

describe('WillGrandparentsComponent', () => {
  let component: WillGrandparentsComponent;
  let fixture: ComponentFixture<WillGrandparentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WillGrandparentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WillGrandparentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
