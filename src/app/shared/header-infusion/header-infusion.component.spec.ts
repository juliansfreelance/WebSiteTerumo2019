import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInfusionComponent } from './header-infusion.component';

describe('HeaderInfusionComponent', () => {
  let component: HeaderInfusionComponent;
  let fixture: ComponentFixture<HeaderInfusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderInfusionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderInfusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
