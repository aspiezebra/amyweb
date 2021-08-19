import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuntLindaComponent } from './aunt-linda.component';

describe('AuntLindaComponent', () => {
  let component: AuntLindaComponent;
  let fixture: ComponentFixture<AuntLindaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuntLindaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuntLindaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
