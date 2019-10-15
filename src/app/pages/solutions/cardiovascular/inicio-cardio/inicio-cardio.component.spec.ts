import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCardioComponent } from './inicio-cardio.component';

describe('InicioCardioComponent', () => {
  let component: InicioCardioComponent;
  let fixture: ComponentFixture<InicioCardioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioCardioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioCardioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
