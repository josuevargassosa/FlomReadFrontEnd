import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { PrestamoLibroComponent } from './prestamo-libro.component';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { PagesModule } from '../../../pages/pages.module';

describe('PrestamoLibroComponent', () => {
    let component: PrestamoLibroComponent;
    let fixture: ComponentFixture<PrestamoLibroComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PrestamoLibroComponent],
            imports: [HttpClientTestingModule, PagesModule],
        }).compileComponents();

        fixture = TestBed.createComponent(PrestamoLibroComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
