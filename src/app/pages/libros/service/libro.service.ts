import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';
import { Libro } from '../model/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  apiUrl = environment.serviceUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getLibros(): Observable<Libro[]> {
    return this.http.get(`${this.apiUrl}/libros`).pipe(map((response: any) =>
      response as Libro[]
    ));
  }

  getLibroById(idLibro): Observable<Libro> {
    return this.http.get(`${this.apiUrl}/libros/${idLibro}`).pipe(map((response: any) =>
      response as Libro
    ));
  }

  getLibrosByIdEstudiante(idEstudiante): Observable<Libro[]> {
    return this.http.get(`${this.apiUrl}/libros/${idEstudiante}`).pipe(map((response: any) =>
      response as Libro[]
    ));
  }
}
