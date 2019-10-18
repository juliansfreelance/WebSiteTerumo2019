import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrategiaComercialComponent } from './estrategia-comercial.component';

describe('EstrategiaComercialComponent', () => {
  let component: EstrategiaComercialComponent;
  let fixture: ComponentFixture<EstrategiaComercialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrategiaComercialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrategiaComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
