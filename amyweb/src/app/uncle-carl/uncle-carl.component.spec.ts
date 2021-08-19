import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncleCarlComponent } from './uncle-carl.component';

describe('UncleCarlComponent', () => {
  let component: UncleCarlComponent;
  let fixture: ComponentFixture<UncleCarlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncleCarlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncleCarlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
