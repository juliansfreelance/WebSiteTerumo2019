import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StentsComponent } from './stents.component';

describe('StentsComponent', () => {
  let component: StentsComponent;
  let fixture: ComponentFixture<StentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
