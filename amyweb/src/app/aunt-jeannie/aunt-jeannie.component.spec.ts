import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuntJeannieComponent } from './aunt-jeannie.component';

describe('AuntJeannieComponent', () => {
  let component: AuntJeannieComponent;
  let fixture: ComponentFixture<AuntJeannieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuntJeannieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuntJeannieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
