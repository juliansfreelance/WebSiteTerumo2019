import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadifocusComponent } from './radifocus.component';

describe('RadifocusComponent', () => {
  let component: RadifocusComponent;
  let fixture: ComponentFixture<RadifocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadifocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadifocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
