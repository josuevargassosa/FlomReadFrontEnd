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
}
