import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInterComponent } from './header-inter.component';

describe('HeaderInterComponent', () => {
  let component: HeaderInterComponent;
  let fixture: ComponentFixture<HeaderInterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderInterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderInterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
