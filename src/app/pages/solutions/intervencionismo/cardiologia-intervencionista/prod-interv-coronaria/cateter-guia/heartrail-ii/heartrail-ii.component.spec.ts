import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartrailIiComponent } from './heartrail-ii.component';

describe('HeartrailIiComponent', () => {
  let component: HeartrailIiComponent;
  let fixture: ComponentFixture<HeartrailIiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartrailIiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartrailIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
