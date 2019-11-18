import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgreatMicrocComponent } from './progreat-microc.component';

describe('ProgreatMicrocComponent', () => {
  let component: ProgreatMicrocComponent;
  let fixture: ComponentFixture<ProgreatMicrocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgreatMicrocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgreatMicrocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
