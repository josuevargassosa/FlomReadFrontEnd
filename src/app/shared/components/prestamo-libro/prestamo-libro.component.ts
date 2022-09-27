import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LectorService } from 'app/pages/lector/service/lector.service';
import { LibroService } from 'app/pages/libro/service/libro.service';

@Component({
  selector: 'app-prestamo-libro',
  templateUrl: './prestamo-libro.component.html',
  styleUrls: ['./prestamo-libro.component.scss']
})
export class PrestamoLibroComponent implements OnInit {

  lectores = []
  libros = []
  modalShowPrestamo = false;

  libroForm = new FormGroup({
    lector: new FormControl('', Validators.required),
    libro: new FormControl('', Validators.required),
  });

  constructor(
    private libroService: LibroService,
    private lectorService: LectorService
  ) { }

  ngOnInit(): void {
  }

  modalPrestamo() {
    this.modalShowPrestamo = true;
  }

  cerrar() {
    this.modalShowPrestamo = false;
  }

  cargarDatos() {
    this.lectorService.getLectores().subscribe((response: any) => {
      this.lectores = response;
    })

    this.libroService.getLibros().subscribe((response: any) => {
      this.libros = response;
    })
  }


}
