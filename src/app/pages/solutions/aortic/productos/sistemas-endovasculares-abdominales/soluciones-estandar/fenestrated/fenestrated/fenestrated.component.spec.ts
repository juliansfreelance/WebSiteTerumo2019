import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FenestratedComponent } from './fenestrated.component';

describe('FenestratedComponent', () => {
  let component: FenestratedComponent;
  let fixture: ComponentFixture<FenestratedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FenestratedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FenestratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
