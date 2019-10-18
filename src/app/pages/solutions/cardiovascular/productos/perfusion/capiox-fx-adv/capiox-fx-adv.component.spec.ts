import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapioxFxAdvComponent } from './capiox-fx-adv.component';

describe('CapioxFxAdvComponent', () => {
  let component: CapioxFxAdvComponent;
  let fixture: ComponentFixture<CapioxFxAdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapioxFxAdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapioxFxAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
