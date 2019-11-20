import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelayPlusComponent } from './relay-plus.component';

describe('RelayPlusComponent', () => {
  let component: RelayPlusComponent;
  let fixture: ComponentFixture<RelayPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelayPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelayPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
