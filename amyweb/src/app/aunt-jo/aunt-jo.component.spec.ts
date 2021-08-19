import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuntJoComponent } from './aunt-jo.component';

describe('AuntJoComponent', () => {
  let component: AuntJoComponent;
  let fixture: ComponentFixture<AuntJoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuntJoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuntJoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
