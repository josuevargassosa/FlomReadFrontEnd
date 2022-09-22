import { Component, OnInit } from '@angular/core';
import { Estudiante } from './model/estudiante.model';
import { EstudianteService } from './service/estudiante.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent implements OnInit {

  estudiantes: Estudiante[] = [];
  modalCrearEstudiante: boolean = false;

  constructor(
    private estudianteService: EstudianteService
  ) { }

  ngOnInit(): void {
    this.estudianteService.getEstudiantes().subscribe((response: any) => {
      console.log(response);
      this.estudiantes = response;
    })
  }

  agregarEstudiante() {
    this.modalCrearEstudiante = true;
  }
}
