import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
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
