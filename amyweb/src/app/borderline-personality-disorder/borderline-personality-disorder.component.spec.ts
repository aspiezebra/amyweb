import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderlinePersonalityDisorderComponent } from './borderline-personality-disorder.component';

describe('BorderlinePersonalityDisorderComponent', () => {
  let component: BorderlinePersonalityDisorderComponent;
  let fixture: ComponentFixture<BorderlinePersonalityDisorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderlinePersonalityDisorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderlinePersonalityDisorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
