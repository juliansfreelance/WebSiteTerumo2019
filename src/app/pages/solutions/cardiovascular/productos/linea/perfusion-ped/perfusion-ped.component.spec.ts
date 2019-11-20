import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfusionPedComponent } from './perfusion-ped.component';

describe('PerfusionPedComponent', () => {
  let component: PerfusionPedComponent;
  let fixture: ComponentFixture<PerfusionPedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfusionPedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfusionPedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
