import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAorticComponent } from './inicio-aortic.component';

describe('InicioAorticComponent', () => {
  let component: InicioAorticComponent;
  let fixture: ComponentFixture<InicioAorticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioAorticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioAorticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
