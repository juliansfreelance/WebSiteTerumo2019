import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfusionComponent } from './perfusion.component';

describe('PerfusionComponent', () => {
  let component: PerfusionComponent;
  let fixture: ComponentFixture<PerfusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfusionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
