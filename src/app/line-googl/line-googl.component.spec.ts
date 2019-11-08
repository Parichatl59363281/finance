import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineGOOGLComponent } from './line-googl.component';

describe('LineGOOGLComponent', () => {
  let component: LineGOOGLComponent;
  let fixture: ComponentFixture<LineGOOGLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineGOOGLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineGOOGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
