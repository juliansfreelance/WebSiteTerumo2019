import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreoAbdominalComponent } from './treo-abdominal.component';

describe('TreoAbdominalComponent', () => {
  let component: TreoAbdominalComponent;
  let fixture: ComponentFixture<TreoAbdominalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreoAbdominalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreoAbdominalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
