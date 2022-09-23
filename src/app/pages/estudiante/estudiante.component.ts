import { Component, OnInit } from '@angular/core';
import { Estudiante } from './model/estudiante.model';
import { EstudianteService } from './service/estudiante.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent implements OnInit {

  modalCrearEstudiante: boolean = false;
  estudiantes: Estudiante[] = [];
  estudiante: Estudiante;

  constructor(
    private estudianteService: EstudianteService
  ) { }

  ngOnInit(): void {
    this.estudianteService.getEstudiantes().subscribe((response: any) => {
      this.estudiantes = response;
    })
  }

  modalEstudiante(estudiante?) {
    this.estudiante = estudiante;
    this.modalCrearEstudiante = true;
  }

  modalCerrar() {
    this.modalCrearEstudiante = false;
    this.ngOnInit();
  }
}
