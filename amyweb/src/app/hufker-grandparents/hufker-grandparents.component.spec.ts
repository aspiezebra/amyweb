import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HufkerGrandparentsComponent } from './hufker-grandparents.component';

describe('HufkerGrandparentsComponent', () => {
  let component: HufkerGrandparentsComponent;
  let fixture: ComponentFixture<HufkerGrandparentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HufkerGrandparentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HufkerGrandparentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
