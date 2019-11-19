import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAorticComponent } from './header-aortic.component';

describe('HeaderAorticComponent', () => {
  let component: HeaderAorticComponent;
  let fixture: ComponentFixture<HeaderAorticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAorticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAorticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
