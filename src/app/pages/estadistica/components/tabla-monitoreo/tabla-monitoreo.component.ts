import { Component, OnInit } from '@angular/core';
import { AppConfig } from 'app/core/config/app.config';
import { Libro } from 'app/pages/libro/model/libro.model';
import { LibroService } from 'app/pages/libro/service/libro.service';
import { LibroLector } from 'app/shared/model/shared';
import { SharedService } from 'app/shared/services/shared.service';
import { Subscription } from 'rxjs';
import { EstadisticaService } from '../../service/estadistica.service';

@Component({
    selector: 'app-tabla-monitoreo',
    templateUrl: './tabla-monitoreo.component.html',
    styleUrls: ['./tabla-monitoreo.component.scss'],
})
export class TablaMonitoreoComponent implements OnInit {
    prestamos: LibroLector[] = [];
    dataGraficoLibros: any;
    dataBarrasInstituciones: any;
    dataLectores: any;
    data: any;
    chartOptions: any;
    subscription: Subscription;
    config: AppConfig;

    constructor(
        private libroService: LibroService,
        private sharedService: SharedService,
        private estadisticasService: EstadisticaService,
    ) {}

    ngOnInit(): void {
        try {
            this.sharedService.getPrestamos().subscribe((response: any) => {
                this.prestamos = response;
                console.log('PRESTAMOS',response);
                this.prestamos.map((m) => {
                    m.tiempo = new Date().getTime() - new Date(m.fechaCreacion).getTime();
                    m.tiempo =  (m.tiempo / (1000 * 60 * 60 * 24)).toFixed(0);   
                    if (m.estado == 'P') {
                        m.estado = 'Prestado';
                    } else if (m.estado == 'L') {
                        m.estado = 'Leido';
                    }
                    return this.prestamos;
                });
                console.log(this.prestamos);
            });
            this.cargarLibros();
            this.cargarInstituciones();
        } catch (error) {
            console.log(error);
        }
    }

    cargarTops5() {}

    cargarLibros() {
        this.estadisticasService
            .getTop5Lectores()
            .subscribe((response: any) => {
                this.dataLectores = response;
                console.log('Lectores', response);
            });

        let topNombresLibros: any[] = [];
        let topLibrosLeidos: any[] = [];

        this.estadisticasService.getTop5Libros().subscribe((response: []) => {
            console.log('Libros', response);
            response.forEach((element: any) => {
                topNombresLibros.push(element.Nombre);
                topLibrosLeidos.push(element.Cantidad);
            });

            this.dataGraficoLibros = {
                labels: topNombresLibros,
                datasets: [
                    {
                        data: topLibrosLeidos,
                        backgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#74EC57',
                            '#9F57EC',
                        ],
                        hoverBackgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#74EC57',
                            '#9F57EC',
                        ],
                    },
                ],
            };

            // console.log('LIBROS GRAFICO ', this.dataGraficoLibros);
        });
    }


    async cargarInstituciones() {
        let productosEstadisticas = [];
        let dataNombres = []
        let dataCantidad = []
        this.estadisticasService
            .getTop5Instituciones()
            .subscribe((response: any) => {
              console.log('Instituciones', response);
                response.forEach((element: any) => {
                    dataNombres.push(element.Institucion);
                    dataCantidad.push(element.Cantidad);
                });
              this.data = {
                labels: dataNombres,
                datasets: [
                    {
                        data: dataCantidad,
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }
                ]
            };

                // productosEstadisticas = response;
                // let topNombres: any[] = [];
                // let vistasProductos = [];
                // let topData;
                // let envioDato = [];
                // console.log("Instituciones", productosEstadisticas);
                // for (let i = 0; i < productosEstadisticas.length; i++) {
                //   if (i < 5) {
                //     console.log('ENTRE 1');
                //     topNombres.push(productosEstadisticas[i].Nombres);
                //     vistasProductos.push(productosEstadisticas[i].Cantidad);
                //     const data = {
                //       label: 'Productos',
                //       backgroundColor: '#42A5F5',
                //       data: vistasProductos
                //     }
                //     topData = data;
                //   }
                // }
                // envioDato.push(topData);
                // this.dataBarrasInstituciones = {
                //   labels: topNombres,
                //   datasets: envioDato
                // };
                console.log("Instituciones GRAFICO", this.data);

            });

    }
}
