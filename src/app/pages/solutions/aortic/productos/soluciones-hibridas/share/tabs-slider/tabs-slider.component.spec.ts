import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsSliderComponent } from './tabs-slider.component';

describe('TabsSliderComponent', () => {
  let component: TabsSliderComponent;
  let fixture: ComponentFixture<TabsSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
