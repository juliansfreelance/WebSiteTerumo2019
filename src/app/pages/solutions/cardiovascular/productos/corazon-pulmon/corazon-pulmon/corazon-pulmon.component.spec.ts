import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorazonPulmonComponent } from './corazon-pulmon.component';

describe('CorazonPulmonComponent', () => {
  let component: CorazonPulmonComponent;
  let fixture: ComponentFixture<CorazonPulmonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorazonPulmonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorazonPulmonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
