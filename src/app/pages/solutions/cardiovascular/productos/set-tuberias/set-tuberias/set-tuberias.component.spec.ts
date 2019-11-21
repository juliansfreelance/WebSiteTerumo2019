import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { STuberiasComponent } from './set-tuberias.component';

describe('STuberiasComponent', () => {
  let component: STuberiasComponent;
  let fixture: ComponentFixture<STuberiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ STuberiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(STuberiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
