import { TestBed } from '@angular/core/testing';

import { ScrollcssService } from './scrollcss.service';

describe('ScrollcssService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrollcssService = TestBed.get(ScrollcssService);
    expect(service).toBeTruthy();
  });
});
