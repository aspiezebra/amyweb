import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HufkerFamilyComponent } from './hufker-family.component';

describe('HufkerFamilyComponent', () => {
  let component: HufkerFamilyComponent;
  let fixture: ComponentFixture<HufkerFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HufkerFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HufkerFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
