import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapioxSpComponent } from './capiox-sp.component';

describe('CapioxSpComponent', () => {
  let component: CapioxSpComponent;
  let fixture: ComponentFixture<CapioxSpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapioxSpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapioxSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
