import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerumoAdvSystemComponent } from './terumo-adv-system.component';

describe('TerumoAdvSystemComponent', () => {
  let component: TerumoAdvSystemComponent;
  let fixture: ComponentFixture<TerumoAdvSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerumoAdvSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerumoAdvSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
