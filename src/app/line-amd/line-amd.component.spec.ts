import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineAMDComponent } from './line-amd.component';

describe('LineAMDComponent', () => {
  let component: LineAMDComponent;
  let fixture: ComponentFixture<LineAMDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineAMDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineAMDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
