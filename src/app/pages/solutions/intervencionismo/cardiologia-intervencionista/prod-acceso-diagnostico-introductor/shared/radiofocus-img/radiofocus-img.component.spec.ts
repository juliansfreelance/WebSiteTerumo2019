import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiofocusImgComponent } from './radiofocus-img.component';

describe('RadiofocusImgComponent', () => {
  let component: RadiofocusImgComponent;
  let fixture: ComponentFixture<RadiofocusImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiofocusImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiofocusImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
