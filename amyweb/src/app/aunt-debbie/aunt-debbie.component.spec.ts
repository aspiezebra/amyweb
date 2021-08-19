import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuntDebbieComponent } from './aunt-debbie.component';

describe('AuntDebbieComponent', () => {
  let component: AuntDebbieComponent;
  let fixture: ComponentFixture<AuntDebbieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuntDebbieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuntDebbieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
