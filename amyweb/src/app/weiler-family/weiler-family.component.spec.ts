import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeilerFamilyComponent } from './weiler-family.component';

describe('WeilerFamilyComponent', () => {
  let component: WeilerFamilyComponent;
  let fixture: ComponentFixture<WeilerFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeilerFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeilerFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
