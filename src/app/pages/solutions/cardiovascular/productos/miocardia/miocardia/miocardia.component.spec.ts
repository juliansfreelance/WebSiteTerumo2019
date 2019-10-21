import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiocardiaComponent } from './miocardia.component';

describe('MiocardiaComponent', () => {
  let component: MiocardiaComponent;
  let fixture: ComponentFixture<MiocardiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiocardiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiocardiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
