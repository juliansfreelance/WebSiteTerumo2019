import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FArterialComponent } from './f-arterial.component';

describe('FArterialComponent', () => {
  let component: FArterialComponent;
  let fixture: ComponentFixture<FArterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FArterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FArterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
