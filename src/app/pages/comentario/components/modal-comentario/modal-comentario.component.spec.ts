import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComentarioComponent } from './modal-comentario.component';
import { PagesModule } from '../../../pages.module';

describe('ModalComentarioComponent', () => {
    let component: ModalComentarioComponent;
    let fixture: ComponentFixture<ModalComentarioComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModalComentarioComponent],
            imports: [PagesModule],
        }).compileComponents();

        fixture = TestBed.createComponent(ModalComentarioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
