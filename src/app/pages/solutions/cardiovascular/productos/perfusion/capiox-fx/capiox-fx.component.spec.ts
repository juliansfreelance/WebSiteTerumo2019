import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapioxFxComponent } from './capiox-fx.component';

describe('CapioxFxComponent', () => {
  let component: CapioxFxComponent;
  let fixture: ComponentFixture<CapioxFxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapioxFxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapioxFxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
