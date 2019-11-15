import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdIntervCoronariaComponent } from './prod-interv-coronaria.component';

describe('ProdIntervCoronariaComponent', () => {
  let component: ProdIntervCoronariaComponent;
  let fixture: ComponentFixture<ProdIntervCoronariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdIntervCoronariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdIntervCoronariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
