import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnacondaComponent } from './anaconda.component';

describe('AnacondaComponent', () => {
  let component: AnacondaComponent;
  let fixture: ComponentFixture<AnacondaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnacondaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnacondaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
