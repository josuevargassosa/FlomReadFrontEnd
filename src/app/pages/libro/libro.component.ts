import { Component, OnInit } from '@angular/core';
import { LibroLector } from 'app/shared/model/shared';
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
    prestamos: LibroLector[] = [];
    
    constructor(
        private libroService: LibroService,
        private sharedService: SharedService
    ) {}

    ngOnInit(): void {
        this.libroService.getLibros().subscribe((response: any) => {
            this.libros = response;
            console.log(this.libros);
        });
        this.getPrestamos();
    }

    modalLibro(lector?) {
        this.libro = lector;
        this.modalShowLibro = true;
    }

    modalCerrar() {
        this.modalShowLibro = false;
        this.ngOnInit();
    }

    getPrestamos() {
        this.sharedService.getPrestamos().subscribe((response: any) => {
            this.prestamos = response;
        })
    }

    validarPrestamos(idLibro: number) {
        let prestamos = this.prestamos.filter((m) => m.libro.id == idLibro);
        console.log('PRESTAMOSSS',prestamos);
        if (prestamos.length > 0) {
            this.sharedService.modalAlert(
                'No se puede eliminar el libro porque tiene prestamos asociados',
                '',
                'warning'
            );
            return false;
        } else {
            this.libroService
                        .deleteLibro(idLibro)
                        .subscribe((response: any) => {
                            console.log(response);
                            this.sharedService.modalAlert(
                                'Libro eliminado correctamente',
                                '',
                                'success'
                            );
                            this.ngOnInit();
                        });
            return true;
        }
    }

    eliminarLibro(id: number) {
        console.log(id);
        this.sharedService
            .modalAlertButtons('¿Esta seguro de eliminar el registro?')
            .then((result) => {
                if (result.isConfirmed) {
                    this.validarPrestamos(id);
                    
                    //Swal.fire('Saved!', '', 'success')
                } else if (result.isDenied) {
                    this.modalCerrar();
                    //Swal.fire('Changes are not saved', '', 'info')
                }
            });
    }
}
