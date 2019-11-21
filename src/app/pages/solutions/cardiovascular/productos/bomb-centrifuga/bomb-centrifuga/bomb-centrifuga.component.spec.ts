import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BombCentrifugaComponent } from './bomb-centrifuga.component';

describe('BombCentrifugaComponent', () => {
  let component: BombCentrifugaComponent;
  let fixture: ComponentFixture<BombCentrifugaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BombCentrifugaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BombCentrifugaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
