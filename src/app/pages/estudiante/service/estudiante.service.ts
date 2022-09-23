import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';
import { Estudiante } from '../model/estudiante.model';

const httpHeaders = {
  'Content-Type': 'application/json',
  // 'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
}

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  apiUrl = environment.serviceUrl;
  
  constructor(
    private http: HttpClient,
  ) { }

  getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get(`${this.apiUrl}/estudiante`).pipe(map((response: any) =>
      response as Estudiante[]
    ));
  }

  getEstudiantesById(idEstudiante): Observable<Estudiante> {
    return this.http.get(`${this.apiUrl}/estudiante/${idEstudiante}`).pipe(map((response: any) =>
      response as Estudiante
    ));
  }

  crearEstudiante(data: Estudiante): Observable<Estudiante> {
    return this.http.post(`${this.apiUrl}/estudiante`, data).pipe(map((response: any) =>
      response as Estudiante
    ));
  }

  actualizarEstudiante(data: Estudiante, idEstudiante): Observable<Estudiante> {
    return this.http.put(`${this.apiUrl}/estudiante/${idEstudiante}`, data).pipe(map((response: any) =>
      response as Estudiante
    ));
  }
}
