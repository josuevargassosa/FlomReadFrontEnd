import { Component, OnInit } from '@angular/core';
import { Libro } from 'app/pages/libro/model/libro.model';
import { LibroService } from 'app/pages/libro/service/libro.service';
import { LibroLector } from 'app/shared/model/shared';
import { SharedService } from 'app/shared/services/shared.service';

@Component({
  selector: 'app-tabla-monitoreo',
  templateUrl: './tabla-monitoreo.component.html',
  styleUrls: ['./tabla-monitoreo.component.scss']
})
export class TablaMonitoreoComponent implements OnInit {

  prestamos: LibroLector[] = [];
  dataGraficoLibros: any;
  dataBarrasInstituciones: any;

  constructor(
    private libroService: LibroService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    try {
      this.sharedService.getPrestamos().subscribe((response: any) => {
        this.prestamos = response;
        console.log(response);
        this.prestamos.map(m => { 
          if(m.estado == 'P') 
          { 
            m.estado = 'Prestado';
          } else if (m.estado == 'L') {
            m.estado = 'Leido'
          }
          return this.prestamos;
        });
        console.log(this.prestamos);
      })
      this.cargarLibros();
      this.getEstadisticasProductos();
    }
    catch (error) {
      console.log(error);
    }
  }

  cargarLibros() {
    let topNombresLibros: any[] = [
      "El principito", "Crepusculo", "Narnia"
    ];
    let topLibrosLeidos: any[] = [
      4, 5, 6
    ];
    this.dataGraficoLibros = {
      labels: topNombresLibros,
      datasets: [
          {
              data: topLibrosLeidos,
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#74EC57",
                  "#9F57EC",
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#74EC57",
                  "#9F57EC",
              ]
          }
      ]
    };
  }


  getEstadisticasProductos() {
    
    let productosEstadisticas: any[] = [
      {
        nombre: "El principito",
        cantidad: 4
      },
      {
        nombre: "Crepusculo",
        cantidad: 5
      },
    ]

    let topNombres: any[] = [];
    let vistasProductos = [];
    let topData;
    let envioDato = [];
    for (let i = 0; i < productosEstadisticas.length; i++) {
      if (i < 5) {
        const data = {
          label: 'Productos',
          backgroundColor: '#42A5F5',
          data: vistasProductos
        }
        topNombres.push(productosEstadisticas[i].nombre);
        vistasProductos.push(productosEstadisticas[i].cantidad);
        topData = data;
      }
    }

    envioDato.push(topData);
  
    this.dataBarrasInstituciones = {
      labels: topNombres,
      datasets: envioDato
    };

  };

}
