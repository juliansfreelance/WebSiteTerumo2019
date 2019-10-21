import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerculesComponent } from './hercules.component';

describe('HerculesComponent', () => {
  let component: HerculesComponent;
  let fixture: ComponentFixture<HerculesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerculesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
