import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';
import { Estadistica } from '../model/estadistica.model';


@Injectable({
  providedIn: 'root'
})
export class EstadisticaService {

  apiUrl = environment.serviceUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getEstadisticas(): Observable<Estadistica[]> {
    return this.http.get(`${this.apiUrl}/estudiante`).pipe(map((response: any) =>
      response as Estadistica[]
    ));
  }

  getCantLibros(): Observable<number> {
    return this.http.get(`${this.apiUrl}/libro/Count`).pipe(map((response: any) =>
      response as number
    ));
  }

  getCantLibrosPrestados(): Observable<number> {
    return this.http.get(`${this.apiUrl}/LibroLector/Cantidad/Prestados`).pipe(map((response: any) =>
      response as number
    ));
  }

  getCantLibrosLeidos(): Observable<number> {
    return this.http.get(`${this.apiUrl}/LibroLector/Cantidad/Leidos`).pipe(map((response: any) =>
      response as number
    ));
  }

  getCantLectores(): Observable<number> {
    return this.http.get(`${this.apiUrl}/lector/Count`).pipe(map((response: any) =>
      response as number
    ));
  }

  getTop5Libros() {
    return this.http.get(`${this.apiUrl}/estadistica/top5Libros`).pipe(map((response: any) =>
      response as any
    ));
  }

  getTop5Lectores() {
    return this.http.get(`${this.apiUrl}/estadistica/top5Lectores`).pipe(map((response: any) =>
      response as any
    ));
  }

  getTop5Instituciones() {
    return this.http.get(`${this.apiUrl}/estadistica/top5Instituciones`).pipe(map((response: any) =>
      response as any
    ));
  }
}
