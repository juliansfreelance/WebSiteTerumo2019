import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendaMasComponent } from './aprenda-mas.component';

describe('AprendaMasComponent', () => {
  let component: AprendaMasComponent;
  let fixture: ComponentFixture<AprendaMasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprendaMasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprendaMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
