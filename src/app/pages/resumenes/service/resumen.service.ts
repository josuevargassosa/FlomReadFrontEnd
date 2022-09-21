import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';
import { Resumen } from '../model/resumen.model';


@Injectable({
  providedIn: 'root'
})
export class ResumenService {

  apiUrl = environment.serviceUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getResumenes(): Observable<Resumen[]> {
    return this.http.get(`${this.apiUrl}/resumenes`).pipe(map((response: any) =>
      response as Resumen[]
    ));
  }


}
