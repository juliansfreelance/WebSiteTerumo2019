import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiologiaIntervencionistaComponent } from './cardiologia-intervencionista.component';

describe('CardiologiaIntervencionistaComponent', () => {
  let component: CardiologiaIntervencionistaComponent;
  let fixture: ComponentFixture<CardiologiaIntervencionistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardiologiaIntervencionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardiologiaIntervencionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
