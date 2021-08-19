import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenoComponent } from './geno.component';

describe('GenoComponent', () => {
  let component: GenoComponent;
  let fixture: ComponentFixture<GenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
