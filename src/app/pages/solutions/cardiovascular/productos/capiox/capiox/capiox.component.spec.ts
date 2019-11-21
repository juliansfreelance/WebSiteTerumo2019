import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapioxComponent } from './capiox.component';

describe('CapioxComponent', () => {
  let component: CapioxComponent;
  let fixture: ComponentFixture<CapioxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapioxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapioxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
