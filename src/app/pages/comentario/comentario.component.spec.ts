import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { ComentarioComponent } from './comentario.component';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { PagesModule } from '../pages.module';

describe('ComentarioComponent', () => {
    let component: ComentarioComponent;
    let fixture: ComponentFixture<ComentarioComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ComentarioComponent],
            imports: [HttpClientTestingModule, PagesModule],
        }).compileComponents();

        fixture = TestBed.createComponent(ComentarioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
