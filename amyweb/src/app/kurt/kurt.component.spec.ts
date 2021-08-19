import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KurtComponent } from './kurt.component';

describe('KurtComponent', () => {
  let component: KurtComponent;
  let fixture: ComponentFixture<KurtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KurtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
