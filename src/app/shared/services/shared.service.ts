import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';
import { LibroLector } from '../model/shared';
import Swal from 'sweetalert2';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { FileSaverService } from 'ngx-filesaver';
@Injectable({
    providedIn: 'root',
})
export class SharedService {
    apiUrl = environment.serviceUrl;
    baseUrl: string;
    EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    EXCEL_EXTENSION = '.xlsx';

    ejemplo = [
        {
            id: 1,
            nombre: 'Juan',
            apellido: 'Perez',
            edad: 25,
        },
        {
            id: 2,
            nombre: 'Pedro',
            apellido: 'Gomez',
            edad: 30,
        },
    ];

    constructor(
        private http: HttpClient,
        private filerSaver: FileSaverService
    ) {}

    postPrestamo(data): Observable<any> {
        return this.http
            .post(`${this.apiUrl}/LibroLector`, data)
            .pipe(map((response: any) => response));
    }

    getPrestamos(): Observable<LibroLector[]> {
        return this.http
            .get(`${this.apiUrl}/LibroLector`)
            .pipe(map((response: any) => response as LibroLector[]));
    }

    modalAlert(titulo: string, mensaje: string, icon: any) {
        Swal.fire({
            icon: icon,
            title: titulo,
            text: mensaje,
        });
    }

    modalAlertButtons(title: string) {
        return Swal.fire({
            title: title,
            showConfirmButton: true,
            showCancelButton: true,
        });
    }

    excel() {}

    saveToFileSystem(data) {
        const work = XLSX.utils.json_to_sheet(data);

        const workbook = {
            Sheets: {
                data: work,
            },
            SheetNames: ['data'],
        };

        const excelBuffer = XLSX.write(workbook, {
            bookType: 'xlsx',
            type: 'array',
        });

        const blobData = new Blob([excelBuffer], { type: this.EXCEL_TYPE });
        this.filerSaver.save(blobData, 'ejemplo');
    }
}
