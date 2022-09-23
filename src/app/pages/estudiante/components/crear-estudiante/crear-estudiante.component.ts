import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { grados } from '../../../../shared/constantes';
import { Estudiante } from '../../model/estudiante.model';
import { EstudianteService } from '../../service/estudiante.service';
@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.scss']
})
export class CrearEstudianteComponent implements OnInit {

  @Input() modalCrearEstudiante;
  @Input() estudiante: Estudiante;
  @Output() modalCerrar = new EventEmitter<Boolean>();


  estudianteForm = new FormGroup({
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    identificacion: new FormControl('',Validators.required),
    edad: new FormControl(undefined,Validators.required),
    correo: new FormControl('',Validators.required),
    grado: new FormControl('Universidad',Validators.required),
    fotoPerfil: new FormControl(''),
    estado: new FormControl('A'),
    clave: new FormControl(''),
  });

  grados = grados;

  constructor(
    private estudianteService: EstudianteService
  ) { }

  ngOnInit(): void {
  }

  showModal() {
    if (this.estudiante) {
      this.estudianteForm.controls['nombres'].setValue(this.estudiante.nombres);
      this.estudianteForm.controls['apellidos'].setValue(this.estudiante.apellidos);
      this.estudianteForm.controls['identificacion'].setValue(this.estudiante.identificacion);
      this.estudianteForm.controls['edad'].setValue(this.estudiante.edad);
      this.estudianteForm.controls['correo'].setValue(this.estudiante.correo);
      this.estudianteForm.controls['grado'].setValue(this.estudiante.grado);  
    } else {
      this.estudianteForm.reset();
    }
  }

  cerrar() {
    this.modalCerrar.emit(false);
  }


  crear() {
    this.estudianteForm.controls['clave'].setValue(this.estudianteForm.controls['identificacion'].value);
    if (this.estudiante) {
      //Editar
      this.estudianteService.actualizarEstudiante(this.estudianteForm.value as Estudiante, this.estudiante.id).subscribe((response: any) => {
        console.log(response);
        this.modalCerrar.emit(false);
      });
    } else {
      //Crear
      this.estudianteService.crearEstudiante(this.estudianteForm.value as Estudiante).subscribe((response: any) => {
        console.log(response);
        this.modalCerrar.emit(false);
      });
    }
  }

}
