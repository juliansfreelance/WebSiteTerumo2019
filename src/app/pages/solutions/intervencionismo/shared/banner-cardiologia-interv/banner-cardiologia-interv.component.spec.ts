import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCardiologiaIntervComponent } from './banner-cardiologia-interv.component';

describe('BannerCardiologiaIntervComponent', () => {
  let component: BannerCardiologiaIntervComponent;
  let fixture: ComponentFixture<BannerCardiologiaIntervComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerCardiologiaIntervComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCardiologiaIntervComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
