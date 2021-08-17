import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trisomy12pComponent } from './trisomy12p.component';

describe('Trisomy12pComponent', () => {
  let component: Trisomy12pComponent;
  let fixture: ComponentFixture<Trisomy12pComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trisomy12pComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trisomy12pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
