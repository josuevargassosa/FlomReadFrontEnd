import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { ModalLibroComponent } from './modal-libro.component';
import { PagesModule } from 'app/pages/pages.module';

describe('ModalLibroComponent', () => {
    let component: ModalLibroComponent;
    let fixture: ComponentFixture<ModalLibroComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModalLibroComponent],
            imports: [HttpClientTestingModule, PagesModule],
        }).compileComponents();

        fixture = TestBed.createComponent(ModalLibroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
