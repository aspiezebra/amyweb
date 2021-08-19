import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodGrandparentsComponent } from './god-grandparents.component';

describe('GodGrandparentsComponent', () => {
  let component: GodGrandparentsComponent;
  let fixture: ComponentFixture<GodGrandparentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodGrandparentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodGrandparentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
