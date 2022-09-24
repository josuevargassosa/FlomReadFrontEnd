import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Libro } from '../../model/libro.model';
import { LibroService } from '../../service/libro.service';

@Component({
  selector: 'app-modal-libro',
  templateUrl: './modal-libro.component.html',
  styleUrls: ['./modal-libro.component.scss']
})
export class ModalLibroComponent implements OnInit {

  @Input() modalShowLibro;
  @Input() libro: Libro;
  @Output() modalCerrar = new EventEmitter<Boolean>();

  libroForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    autor: new FormControl('', Validators.required),
    resumen: new FormControl(''),
    fotoPortada: new FormControl(''),
    estado: new FormControl('A'),
  });
  

  constructor(
    private libroService: LibroService
  ) { }

  ngOnInit(): void {

  }

  showModal() {
    console.log(this.libro);
    if (this.libro) {
      console.log('ENTRO');
      this.libroForm.controls['nombre'].setValue(this.libro.nombre);
      this.libroForm.controls['autor'].setValue(this.libro.autor);
      this.libroForm.controls['resumen'].setValue(this.libro.resumen);
      this.libroForm.controls['fotoPortada'].setValue(this.libro.fotoPortada);
      this.libroForm.controls['estado'].setValue(this.libro.estado);  
    } else {
      this.libroForm.reset();
    }
  }


  cerrar() {
    this.modalCerrar.emit(false);
  }


  crear() {
    if (this.libro) {
      //Editar
      this.libroService.actualizarLibro(this.libroForm.value as Libro, this.libro.id).subscribe((response: any) => {
        console.log(response);
        this.modalCerrar.emit(false);
      });
    } else {
      //Crear
      this.libroForm.controls['estado'].setValue('A');
      this.libroService.crearLibro(this.libroForm.value as Libro).subscribe((response: any) => {
        console.log(response);
        this.modalCerrar.emit(false);
      });
    }
  }

}
