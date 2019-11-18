import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccuforceComponent } from './accuforce.component';

describe('AccuforceComponent', () => {
  let component: AccuforceComponent;
  let fixture: ComponentFixture<AccuforceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccuforceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccuforceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
