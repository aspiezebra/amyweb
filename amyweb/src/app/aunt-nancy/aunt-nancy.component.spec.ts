import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuntNancyComponent } from './aunt-nancy.component';

describe('AuntNancyComponent', () => {
  let component: AuntNancyComponent;
  let fixture: ComponentFixture<AuntNancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuntNancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuntNancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
