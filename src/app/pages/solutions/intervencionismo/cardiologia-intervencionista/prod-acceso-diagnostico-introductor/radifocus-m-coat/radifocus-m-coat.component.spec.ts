import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadifocusMCoatComponent } from './radifocus-m-coat.component';

describe('RadifocusMCoatComponent', () => {
  let component: RadifocusMCoatComponent;
  let fixture: ComponentFixture<RadifocusMCoatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadifocusMCoatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadifocusMCoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
