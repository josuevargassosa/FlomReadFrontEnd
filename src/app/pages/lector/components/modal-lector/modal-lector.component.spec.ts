import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLectorComponent } from './modal-lector.component';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { PagesModule } from 'app/pages/pages.module';

describe('ModalLectorComponent', () => {
    let component: ModalLectorComponent;
    let fixture: ComponentFixture<ModalLectorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModalLectorComponent],
            imports: [HttpClientTestingModule, PagesModule],
        }).compileComponents();

        fixture = TestBed.createComponent(ModalLectorComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
