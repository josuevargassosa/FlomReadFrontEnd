import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EstadisticaService } from '../../service/estadistica.service';

@Component({
  selector: 'app-estadisticas-basicas',
  templateUrl: './estadisticas-basicas.component.html',
  styleUrls: ['./estadisticas-basicas.component.scss']
})
export class EstadisticasBasicasComponent implements OnInit {

  @Input() formEstadisticasMenu: FormGroup;
  @Input() formEstadisticasMenuQR: FormGroup;

  cantidadLibros = 0;
  cantidadLibrosPrestados = 0;
  cantidadLibrosLeidos = 0;
  cantidadLectores = 0;

  constructor(
    private estadisticasService: EstadisticaService
  ) { }

  ngOnInit(): void {
    this.cargarEstadisticas();
  }
  
  cargarEstadisticas() {
    
    this.estadisticasService.getCantLibros().subscribe(
      (response: any) => {
        this.cantidadLibros = response;
      }
    );

    this.estadisticasService.getCantLibrosPrestados().subscribe(
      (response: any) => {
        this.cantidadLibrosPrestados = response;
      }
    );

    this.estadisticasService.getCantLibrosLeidos().subscribe(
      (response: any) => {
        this.cantidadLibrosLeidos = response;
      }
    );

    this.estadisticasService.getCantLectores().subscribe(
      (response: any) => {
        this.cantidadLectores = response;
      }
    );
  }

}
