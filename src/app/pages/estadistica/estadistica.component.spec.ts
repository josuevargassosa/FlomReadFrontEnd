import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaComponent } from './estadistica.component';
import { EstadisticasBasicasComponent } from '../estadistica/components/estadisticas-basicas/estadisticas-basicas.component';
import { TablaMonitoreoComponent } from '../estadistica/components/tabla-monitoreo/tabla-monitoreo.component';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { PagesModule } from 'app/pages/pages.module';

describe('EstadisticaComponent', () => {
    let component: EstadisticaComponent;
    let fixture: ComponentFixture<EstadisticaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                EstadisticaComponent,
                EstadisticasBasicasComponent,
                TablaMonitoreoComponent,
            ],
            imports: [HttpClientTestingModule, PagesModule],
        }).compileComponents();

        fixture = TestBed.createComponent(EstadisticaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    afterEach(() => {});
});
