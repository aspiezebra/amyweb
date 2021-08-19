import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncleDaleComponent } from './uncle-dale.component';

describe('UncleDaleComponent', () => {
  let component: UncleDaleComponent;
  let fixture: ComponentFixture<UncleDaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncleDaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncleDaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
