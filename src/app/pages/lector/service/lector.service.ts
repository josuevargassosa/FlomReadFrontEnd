import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';
import { Lector } from '../model/lector.model';

@Injectable({
  providedIn: 'root'
})
export class LectorService {

  apiUrl = environment.serviceUrl;
  
  constructor(
    private http: HttpClient,
  ) { }

  getLectores(): Observable<Lector[]> {
    return this.http.get(`${this.apiUrl}/lector`).pipe(map((response: any) =>
      response as Lector[]
    ));
  }

  getLectorById(idLector): Observable<Lector> {
    return this.http.get(`${this.apiUrl}/lector/${idLector}`).pipe(map((response: any) =>
      response as Lector
    ));
  }

  crearLector(data: Lector): Observable<Lector> {
    return this.http.post(`${this.apiUrl}/lector`, data).pipe(map((response: any) =>
      response as Lector
    ));
  }

  actualizarLector(data: Lector, idLector): Observable<Lector> {
    return this.http.put(`${this.apiUrl}/lector/${idLector}`, data).pipe(map((response: any) =>
      response as Lector
    ));
  }
}
