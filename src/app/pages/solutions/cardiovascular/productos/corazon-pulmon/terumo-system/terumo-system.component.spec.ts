import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerumoSystemComponent } from './terumo-system.component';

describe('TerumoSystemComponent', () => {
  let component: TerumoSystemComponent;
  let fixture: ComponentFixture<TerumoSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerumoSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerumoSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
