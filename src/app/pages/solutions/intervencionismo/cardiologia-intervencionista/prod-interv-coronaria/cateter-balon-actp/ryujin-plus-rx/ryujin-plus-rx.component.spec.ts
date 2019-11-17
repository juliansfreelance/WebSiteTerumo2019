import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RyujinPlusRxComponent } from './ryujin-plus-rx.component';

describe('RyujinPlusRxComponent', () => {
  let component: RyujinPlusRxComponent;
  let fixture: ComponentFixture<RyujinPlusRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RyujinPlusRxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RyujinPlusRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
