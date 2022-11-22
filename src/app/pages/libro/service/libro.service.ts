import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';
import { Libro } from '../model/libro.model';

@Injectable({
    providedIn: 'root',
})
export class LibroService {
    apiUrl = environment.serviceUrl;

    constructor(private http: HttpClient) {}

    getLibros(): Observable<Libro[]> {
        return this.http
            .get(`${this.apiUrl}/libro`)
            .pipe(map((response: any) => response as Libro[]));
    }

    getLibroById(idLibro): Observable<Libro> {
        return this.http
            .get(`${this.apiUrl}/libro/${idLibro}`)
            .pipe(map((response: any) => response as Libro));
    }

    getLibroByCodigo(codigo): Observable<Libro> {
        return this.http
            .get(`${this.apiUrl}/libro/codigo/${codigo}`)
            .pipe(map((response: any) => response as Libro));
    }

    crearLibro(data: Libro): Observable<Libro> {
        return this.http
            .post(`${this.apiUrl}/libro`, data)
            .pipe(map((response: any) => response as Libro));
    }

    actualizarLibro(data: Libro, idLibro): Observable<Libro> {
        return this.http
            .put(`${this.apiUrl}/libro/${idLibro}`, data)
            .pipe(map((response: any) => response as Libro));
    }

    updateStateLibro(idLibro, state): Observable<Libro> {
        return this.http
            .post(`${this.apiUrl}/libro/estado/${idLibro}/${state}`, null)
            .pipe(map((response: any) => response as Libro));
    }

    postFile(fileToUpload) {
        return this.http
            .post(`${this.apiUrl}/libro/cargar-foto`, fileToUpload)
            .pipe(map((response: any) => response));
    }

    deleteLibro(idLibro) {
        return this.http
            .delete(`${this.apiUrl}/libro/${idLibro}`)
            .pipe(map((response: any) => response));
    }
}
