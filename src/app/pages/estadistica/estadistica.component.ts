import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.scss']
})
export class EstadisticaComponent implements OnInit {

  libros;
  librosPrestados;
  librosLeidos;
  lectores;
  

  constructor() { }

  ngOnInit(): void {
  }

}
