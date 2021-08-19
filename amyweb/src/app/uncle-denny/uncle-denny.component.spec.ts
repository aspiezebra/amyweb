import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncleDennyComponent } from './uncle-denny.component';

describe('UncleDennyComponent', () => {
  let component: UncleDennyComponent;
  let fixture: ComponentFixture<UncleDennyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncleDennyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncleDennyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
