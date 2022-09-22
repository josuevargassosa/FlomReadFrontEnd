import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.scss']
})
export class CrearEstudianteComponent implements OnInit {

  @Input() modalCrearEstudiante;
  @Output() modalCerrar = new EventEmitter<Boolean>();

  val1: string;

  val2: string;

  val3: string;

  val4: string;

  val5: string;
  
  val6: string;

  estudiante = new UntypedFormGroup({
    nombres: new UntypedFormControl(''),
    apellidos: new UntypedFormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  cerrar() {
    this.modalCerrar.emit(false);
  }

  crear() {
    console.log(this.estudiante);
  }

}
