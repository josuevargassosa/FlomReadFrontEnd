import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/shared/services/shared.service';
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

    constructor(
        private libroService: LibroService,
        private sharedService: SharedService
    ) {}

    ngOnInit(): void {
        this.libroService.getLibros().subscribe((response: any) => {
            this.libros = response;
            console.log(this.libros);
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
        console.log(id);
        this.sharedService
            .modalAlertButtons('¿Esta seguro de eliminar el registro?')
            .then((result) => {
                if (result.isConfirmed) {
                    this.libroService
                        .deleteLibro(id)
                        .subscribe((response: any) => {
                            console.log(response);
                            this.sharedService.modalAlert(
                                'Libro eliminado correctamente',
                                '',
                                'success'
                            );
                            this.ngOnInit();
                        });
                    //Swal.fire('Saved!', '', 'success')
                } else if (result.isDenied) {
                    this.modalCerrar();
                    //Swal.fire('Changes are not saved', '', 'info')
                }
            });
    }
}
