import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { ComentarioService } from './comentario.service';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';

fdescribe('ComentarioService', () => {
    let service: ComentarioService;

    beforeEach(() => {
        // TestBed.configureTestingModule({
        //     imports: [HttpClientTestingModule],
        // });
        // service = TestBed.inject(ComentarioService);
        service = new ComentarioService(new HttpClient(null));
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('Test for get Value', () => {
        it('should get Hello World', () => {
            expect(service.getValue()).toBe('Hello World');
        });
    });

    describe('Test for change Value', () => {
        it('should change value', () => {
            expect(service.getValue()).toBe('Hello World');
            service.postValue('Hello World 2');
            expect(service.getValue()).toBe('Hello World 2');
        });
    });
});
