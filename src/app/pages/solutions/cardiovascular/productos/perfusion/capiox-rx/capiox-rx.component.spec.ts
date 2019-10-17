import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapioxRxComponent } from './capiox-rx.component';

describe('CapioxRxComponent', () => {
  let component: CapioxRxComponent;
  let fixture: ComponentFixture<CapioxRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapioxRxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapioxRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
