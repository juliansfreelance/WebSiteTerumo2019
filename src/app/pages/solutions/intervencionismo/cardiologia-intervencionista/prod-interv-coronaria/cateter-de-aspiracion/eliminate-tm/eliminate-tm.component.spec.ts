import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminateTmComponent } from './eliminate-tm.component';

describe('EliminateTmComponent', () => {
  let component: EliminateTmComponent;
  let fixture: ComponentFixture<EliminateTmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminateTmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminateTmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
