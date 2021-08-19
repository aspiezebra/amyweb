import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZebrasComponent } from './zebras.component';

describe('ZebrasComponent', () => {
  let component: ZebrasComponent;
  let fixture: ComponentFixture<ZebrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZebrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZebrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
