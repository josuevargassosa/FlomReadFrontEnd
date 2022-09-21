import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardService } from '../services/dashboard.service';

import { EstadisticasBasicasComponent } from './estadisticas-basicas.component';

describe('EstadisticasBasicasComponent', () => {
  let component: EstadisticasBasicasComponent;
  let fixture: ComponentFixture<EstadisticasBasicasComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [DashboardService]
  }));


  it('should be created', () => {
    const service: DashboardService = TestBed.get(DashboardService);
    expect(service).toBeTruthy();
   });

   it('should have getData function', () => {
    const service: DashboardService = TestBed.get(DashboardService);
    expect(service.getCalificacionesLocal).toBeTruthy();
   });
});
