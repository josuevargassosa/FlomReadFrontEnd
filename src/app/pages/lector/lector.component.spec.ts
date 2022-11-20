import 'zone.js';
import 'zone.js/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectorComponent } from './lector.component';
import { PagesModule } from '../pages.module';
import { LectorService } from './service/lector.service';
import { Lector } from './model/lector.model';

describe('Test Lector Component', () => {
    // let component: LectorComponent;
    // let fixture: ComponentFixture<LectorComponent>;

    // beforeEach(async () => {
    //     await TestBed.configureTestingModule({
    //         declarations: [PagesModule],
    //     }).compileComponents();

    //     fixture = TestBed.createComponent(LectorComponent);
    //     component = fixture.componentInstance;
    //     fixture.detectChanges();
    // });

    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });

    it('#modalLector', () => {
        //(AAAA)
        //Arrange
        const lectorComponent = new LectorComponent(null);
        const lector: Lector = {
            id: 1,
            nombres: 'Cesar Josue',
            apellidos: 'Vargas Sosa',
            identificacion: '0929104552',
            edad: 23,
            correo: 'josuevargass@hotmail.com',
            grado: 'Inicial',
            fotoPerfil: null,
            estado: null,
            sexo: 'M',
            institucion: 'CEES',
        };
        //Act
        lectorComponent.modalLector(lector);
        //Assert
    });
});
