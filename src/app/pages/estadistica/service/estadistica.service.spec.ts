import { TestBed } from '@angular/core/testing';

import { EstadisticaService } from './estadistica.service';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';

describe('EstadisticaService', () => {
    let service: EstadisticaService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(EstadisticaService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
