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
  
  constructor(
    private libroService: LibroService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.getPrestamos().subscribe((response: any) => {
      this.prestamos = response;
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
  }

}
