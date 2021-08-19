import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WillAuntsComponent } from './will-aunts.component';

describe('WillAuntsComponent', () => {
  let component: WillAuntsComponent;
  let fixture: ComponentFixture<WillAuntsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WillAuntsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WillAuntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
