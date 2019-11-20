import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HemoconcentradoresComponent } from './hemoconcentradores.component';

describe('HemoconcentradoresComponent', () => {
  let component: HemoconcentradoresComponent;
  let fixture: ComponentFixture<HemoconcentradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HemoconcentradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HemoconcentradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
