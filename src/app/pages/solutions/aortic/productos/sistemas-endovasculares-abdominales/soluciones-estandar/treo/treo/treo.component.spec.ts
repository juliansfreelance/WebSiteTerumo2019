import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TREOComponent } from './treo.component';

describe('TREOComponent', () => {
  let component: TREOComponent;
  let fixture: ComponentFixture<TREOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TREOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TREOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
