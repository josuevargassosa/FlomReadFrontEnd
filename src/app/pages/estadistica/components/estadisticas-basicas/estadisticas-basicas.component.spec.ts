import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadisticaService } from '../../service/estadistica.service';
import { HttpClient } from '@angular/common/http';

import { EstadisticasBasicasComponent } from './estadisticas-basicas.component';

describe('EstadisticasBasicasComponent', () => {
  let component: EstadisticasBasicasComponent;
  let fixture: ComponentFixture<EstadisticasBasicasComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [EstadisticaService]
  }));


  it('should be created', () => {
    const service: EstadisticaService = TestBed.get(EstadisticaService);
    expect(service).toBeTruthy();
   });

   it('should have getData function', () => {
    const service: EstadisticaService = TestBed.get(EstadisticaService);
    expect(service.getEstadisticas).toBeTruthy();
   });
});
