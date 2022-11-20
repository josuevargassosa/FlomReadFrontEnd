import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';

describe('SharedService', () => {
    let service: SharedService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(SharedService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
