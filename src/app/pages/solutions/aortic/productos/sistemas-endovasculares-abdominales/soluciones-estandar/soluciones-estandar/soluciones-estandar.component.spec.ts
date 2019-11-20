import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolucionesEstandarComponent } from './soluciones-estandar.component';

describe('SolucionesEstandarComponent', () => {
  let component: SolucionesEstandarComponent;
  let fixture: ComponentFixture<SolucionesEstandarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolucionesEstandarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolucionesEstandarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
