import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateterGuiaComponent } from './cateter-guia.component';

describe('CateterGuiaComponent', () => {
  let component: CateterGuiaComponent;
  let fixture: ComponentFixture<CateterGuiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateterGuiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateterGuiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
