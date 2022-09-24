import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { grados } from '../../../../shared/constantes';
import { Lector } from '../../model/lector.model';
import { LectorService } from '../../service/lector.service';
@Component({
  selector: 'app-modal-lector',
  templateUrl: './modal-lector.component.html',
  styleUrls: ['./modal-lector.component.scss']
})
export class ModalLectorComponent implements OnInit {

  @Input() modalShowLector;
  @Input() lector: Lector;
  @Output() modalCerrar = new EventEmitter<Boolean>();


  lectorForm = new FormGroup({
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
    private lectorService: LectorService
  ) { }

  ngOnInit(): void {
  }

  showModal() {
    if (this.lector) {
      this.lectorForm.controls['nombres'].setValue(this.lector.nombres);
      this.lectorForm.controls['apellidos'].setValue(this.lector.apellidos);
      this.lectorForm.controls['identificacion'].setValue(this.lector.identificacion);
      this.lectorForm.controls['edad'].setValue(this.lector.edad);
      this.lectorForm.controls['correo'].setValue(this.lector.correo);
      this.lectorForm.controls['grado'].setValue(this.lector.grado);  
    } else {
      this.lectorForm.reset();
    }
  }

  cerrar() {
    this.modalCerrar.emit(false);
  }


  crear() {
    this.lectorForm.controls['clave'].setValue(this.lectorForm.controls['identificacion'].value);

    if (this.lector) {
      //Editar
      this.lectorService.actualizarLector(this.lectorForm.value as Lector, this.lector.id).subscribe((response: any) => {
        console.log(response);
        this.modalCerrar.emit(false);
      });
    } else {
      //Crear
      this.lectorForm.controls['estado'].setValue('A');
      this.lectorService.crearLector(this.lectorForm.value as Lector).subscribe((response: any) => {
        console.log(response);
        this.modalCerrar.emit(false);
      });
    }
  }

}