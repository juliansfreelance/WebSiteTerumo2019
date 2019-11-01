import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesTreoComponent } from './resources-treo.component';

describe('ResourcesTreoComponent', () => {
  let component: ResourcesTreoComponent;
  let fixture: ComponentFixture<ResourcesTreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesTreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesTreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
