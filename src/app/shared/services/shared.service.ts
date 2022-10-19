import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';
import { LibroLector } from '../model/shared';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  apiUrl = environment.serviceUrl;

  constructor(
    private http: HttpClient,
  ) { }


  postPrestamo(data): Observable<any> {
    return this.http.post(`${this.apiUrl}/LibroLector`, data).pipe(map((response: any) =>
      response
    ));
  }

  getPrestamos(): Observable<LibroLector[]> {
    return this.http.get(`${this.apiUrl}/LibroLector`).pipe(map((response: any) =>
      response as LibroLector[]
    ));
  }

}
