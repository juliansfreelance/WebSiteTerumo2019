import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCardioplejiaComponent } from './set-cardioplejia.component';

describe('SetCardioplejiaComponent', () => {
  let component: SetCardioplejiaComponent;
  let fixture: ComponentFixture<SetCardioplejiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCardioplejiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCardioplejiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
