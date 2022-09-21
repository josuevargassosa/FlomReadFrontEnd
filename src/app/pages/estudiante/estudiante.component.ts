import { Component, OnInit } from '@angular/core';
import { Estudiante } from './model/estudiante.model';
import { EstudianteService } from './service/estudiante.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent implements OnInit {

  // dataFondoSource = new MatTableDataSource();
  // displayedColumns = ["id", "nombre", "precio", "categoria", "estado", "opciones"];
  // subject2$: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  // data$: Observable<any[]> = this.subject2$.asObservable();

  estudiantes: Estudiante[] = [];

  constructor(
    private estudianteService: EstudianteService
  ) { }

  ngOnInit(): void {
    this.estudianteService.getEstudiantes().subscribe((response: any) => {
      console.log(response);
      this.estudiantes = response;
    })
  }

  agregarProducto() {
    
  }

}
