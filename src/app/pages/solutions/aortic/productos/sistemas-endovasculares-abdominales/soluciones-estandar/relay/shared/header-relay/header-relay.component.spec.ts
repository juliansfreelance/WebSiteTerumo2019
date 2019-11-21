import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRelayComponent } from './header-relay.component';

describe('HeaderRelayComponent', () => {
  let component: HeaderRelayComponent;
  let fixture: ComponentFixture<HeaderRelayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRelayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
