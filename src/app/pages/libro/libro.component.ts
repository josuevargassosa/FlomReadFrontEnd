import { Component, OnInit } from '@angular/core';
import { Libro } from './model/libro.model';
import { LibroService } from './service/libro.service';

@Component({
    selector: 'app-libro',
    templateUrl: './libro.component.html',
    styleUrls: ['./libro.component.scss'],
})
export class LibroComponent implements OnInit {
    modalShowLibro: boolean = false;
    libros: Libro[] = [];
    libro: Libro;

    constructor(private libroService: LibroService) {}

    ngOnInit(): void {
        this.libroService.getLibros().subscribe((response: any) => {
            this.libros = response;
        });
    }

    modalLibro(lector?) {
        this.libro = lector;
        this.modalShowLibro = true;
    }

    modalCerrar() {
        this.modalShowLibro = false;
        this.ngOnInit();
    }

    eliminarLibro(id: number) {
        // this.libroService.deleteLibro(id).subscribe((response: any) => {
        //   this.ngOnInit();
        // })
    }
}
