import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LectorService } from 'app/pages/lector/service/lector.service';
import { LibroService } from 'app/pages/libro/service/libro.service';
import { createLibroLector } from 'app/shared/model/shared';
import { SharedService } from 'app/shared/services/shared.service';

@Component({
  selector: 'app-prestamo-libro',
  templateUrl: './prestamo-libro.component.html',
  styleUrls: ['./prestamo-libro.component.scss']
})
export class PrestamoLibroComponent implements OnInit {

  lectores = []
  libros = []
  modalShowPrestamo = false;
  createLibroPrestamo: createLibroLector;

  libroForm = new FormGroup({
    lector: new FormControl('', Validators.required),
    libro: new FormControl('', Validators.required),
  });

  constructor(
    private libroService: LibroService,
    private lectorService: LectorService,
    private sharedService: SharedService
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

  crear() {
    console.log(this.libroForm.value);
    const data = {
      idLibro: this.libroForm.value.libro,
      idLector: this.libroForm.value.lector,
      estado: 'P'
    }
    this.sharedService.postPrestamo(data).subscribe((response: any) => {
      console.log(response);
    });
  }


}
