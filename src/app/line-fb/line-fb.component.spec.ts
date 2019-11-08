import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineFBComponent } from './line-fb.component';

describe('LineFBComponent', () => {
  let component: LineFBComponent;
  let fixture: ComponentFixture<LineFBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineFBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineFBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
