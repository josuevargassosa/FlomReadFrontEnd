import { Component, OnInit } from '@angular/core';
import { Libro } from 'app/pages/libro/model/libro.model';
import { LibroService } from 'app/pages/libro/service/libro.service';

@Component({
  selector: 'app-tabla-monitoreo',
  templateUrl: './tabla-monitoreo.component.html',
  styleUrls: ['./tabla-monitoreo.component.scss']
})
export class TablaMonitoreoComponent implements OnInit {

  libros: Libro[] = [];
  
  constructor(
    private libroService: LibroService
  ) { }

  ngOnInit(): void {
    this.libroService.getLibros().subscribe((response: any) => {
      this.libros = response;
    })
  }

}
