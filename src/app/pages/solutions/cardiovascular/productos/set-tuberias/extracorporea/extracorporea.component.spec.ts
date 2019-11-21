import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtracorporeaComponent } from './extracorporea.component';

describe('ExtracorporeaComponent', () => {
  let component: ExtracorporeaComponent;
  let fixture: ComponentFixture<ExtracorporeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtracorporeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtracorporeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
