import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmySiblingsComponent } from './amy-siblings.component';

describe('AmySiblingsComponent', () => {
  let component: AmySiblingsComponent;
  let fixture: ComponentFixture<AmySiblingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmySiblingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmySiblingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
