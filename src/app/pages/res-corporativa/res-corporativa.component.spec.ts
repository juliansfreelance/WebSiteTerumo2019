import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResCorporativaComponent } from './res-corporativa.component';

describe('ResCorporativaComponent', () => {
  let component: ResCorporativaComponent;
  let fixture: ComponentFixture<ResCorporativaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResCorporativaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResCorporativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
