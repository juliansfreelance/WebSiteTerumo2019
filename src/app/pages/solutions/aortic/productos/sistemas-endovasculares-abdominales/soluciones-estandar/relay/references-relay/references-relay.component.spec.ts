import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesRelayComponent } from './references-relay.component';

describe('ReferencesRelayComponent', () => {
  let component: ReferencesRelayComponent;
  let fixture: ComponentFixture<ReferencesRelayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferencesRelayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferencesRelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
