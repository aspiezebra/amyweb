import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuntMaryComponent } from './aunt-mary.component';

describe('AuntMaryComponent', () => {
  let component: AuntMaryComponent;
  let fixture: ComponentFixture<AuntMaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuntMaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuntMaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
