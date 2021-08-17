import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhlersDanlosComponent } from './ehlers-danlos.component';

describe('EhlersDanlosComponent', () => {
  let component: EhlersDanlosComponent;
  let fixture: ComponentFixture<EhlersDanlosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhlersDanlosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhlersDanlosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
