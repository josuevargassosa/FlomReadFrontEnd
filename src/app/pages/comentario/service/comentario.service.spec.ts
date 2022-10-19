import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { ComentarioService } from './comentario.service';

describe('ComentarioService', () => {
  let service: ComentarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
