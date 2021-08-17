import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WillFamilyComponent } from './will-family.component';

describe('WillFamilyComponent', () => {
  let component: WillFamilyComponent;
  let fixture: ComponentFixture<WillFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WillFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WillFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
