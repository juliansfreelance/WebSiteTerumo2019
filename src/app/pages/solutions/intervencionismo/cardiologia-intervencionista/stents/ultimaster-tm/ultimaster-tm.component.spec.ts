import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimasterTmComponent } from './ultimaster-tm.component';

describe('UltimasterTmComponent', () => {
  let component: UltimasterTmComponent;
  let fixture: ComponentFixture<UltimasterTmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimasterTmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimasterTmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
