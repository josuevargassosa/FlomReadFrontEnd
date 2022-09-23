import { TestBed } from '@angular/core/testing';

import { LectorService } from './lector.service';

describe('LectorService', () => {
  let service: LectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
