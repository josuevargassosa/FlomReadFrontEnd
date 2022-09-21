import { Component, OnInit } from '@angular/core';
import { Libro } from './model/libro.model';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {

  libros: Libro[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  agregarLibro() {
    
  }
}
