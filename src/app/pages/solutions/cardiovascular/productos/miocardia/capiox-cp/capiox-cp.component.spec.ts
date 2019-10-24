import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapioxCpComponent } from './capiox-cp.component';

describe('CapioxCpComponent', () => {
  let component: CapioxCpComponent;
  let fixture: ComponentFixture<CapioxCpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapioxCpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapioxCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
