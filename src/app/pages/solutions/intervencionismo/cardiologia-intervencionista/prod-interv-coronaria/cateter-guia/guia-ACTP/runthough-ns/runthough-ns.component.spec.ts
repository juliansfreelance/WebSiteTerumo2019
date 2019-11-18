import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunthoughNsComponent } from './runthough-ns.component';

describe('RunthoughNsComponent', () => {
  let component: RunthoughNsComponent;
  let fixture: ComponentFixture<RunthoughNsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunthoughNsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunthoughNsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
