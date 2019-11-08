import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineAMZNComponent } from './line-amzn.component';

describe('LineAMZNComponent', () => {
  let component: LineAMZNComponent;
  let fixture: ComponentFixture<LineAMZNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineAMZNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineAMZNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
