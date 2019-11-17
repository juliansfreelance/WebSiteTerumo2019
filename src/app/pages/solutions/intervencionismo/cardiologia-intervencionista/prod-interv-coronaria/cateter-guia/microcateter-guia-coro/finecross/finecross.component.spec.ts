import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinecrossComponent } from './finecross.component';

describe('FinecrossComponent', () => {
  let component: FinecrossComponent;
  let fixture: ComponentFixture<FinecrossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinecrossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinecrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
