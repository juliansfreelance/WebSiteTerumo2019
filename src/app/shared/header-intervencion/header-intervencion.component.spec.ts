import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIntervencionComponent } from './header-intervencion.component';

describe('HeaderIntervencionComponent', () => {
  let component: HeaderIntervencionComponent;
  let fixture: ComponentFixture<HeaderIntervencionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderIntervencionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderIntervencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
