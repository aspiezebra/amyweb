import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnickersComponent } from './snickers.component';

describe('SnickersComponent', () => {
  let component: SnickersComponent;
  let fixture: ComponentFixture<SnickersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnickersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
