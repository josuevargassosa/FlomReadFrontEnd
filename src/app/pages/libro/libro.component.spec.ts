import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroComponent } from './libro.component';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { PagesModule } from '../pages.module';
import { ModalLibroComponent } from './components/modal-libro/modal-libro.component';

describe('LibroComponent', () => {
    let component: LibroComponent;
    let fixture: ComponentFixture<LibroComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LibroComponent, ModalLibroComponent],
            imports: [HttpClientTestingModule, PagesModule],
        }).compileComponents();

        fixture = TestBed.createComponent(LibroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
