import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoraflexComponent } from './thoraflex.component';

describe('ThoraflexComponent', () => {
  let component: ThoraflexComponent;
  let fixture: ComponentFixture<ThoraflexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThoraflexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoraflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
