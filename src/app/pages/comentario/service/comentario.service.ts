import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';
import { Comentario } from '../model/comentario.model';

@Injectable({
    providedIn: 'root',
})
export class ComentarioService {
    apiUrl = environment.serviceUrl;
    value: string = 'Hello World';

    constructor(private http: HttpClient) {}

    getComentarios(): Observable<Comentario[]> {
        return this.http
            .get(`${this.apiUrl}/Comentario`)
            .pipe(map((response: any) => response as Comentario[]));
    }

    getValue() {
        return this.value;
    }

    postValue(valor: string) {
        return (this.value = valor);
    }
}
