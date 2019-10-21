import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisMonitoreoComponent } from './sis-monitoreo.component';

describe('SisMonitoreoComponent', () => {
  let component: SisMonitoreoComponent;
  let fixture: ComponentFixture<SisMonitoreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisMonitoreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisMonitoreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
