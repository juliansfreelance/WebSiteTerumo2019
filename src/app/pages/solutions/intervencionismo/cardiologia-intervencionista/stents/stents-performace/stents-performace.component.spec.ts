import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StentsPerformaceComponent } from './stents-performace.component';

describe('StentsPerformaceComponent', () => {
  let component: StentsPerformaceComponent;
  let fixture: ComponentFixture<StentsPerformaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StentsPerformaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StentsPerformaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
