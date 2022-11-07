import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root',
})
export class SignInService {
    apiUrl = environment.serviceUrl;
    

    constructor(private http: HttpClient) {}

    signIn() {
        console.log('signing in');
        return this.http.get(`${this.apiUrl}/auth/perfil-admin`);
    }
}
