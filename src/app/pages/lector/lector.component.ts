import { Component, OnInit } from '@angular/core';
import { LibroLector } from 'app/shared/model/shared';
import { SharedService } from 'app/shared/services/shared.service';
import { Lector } from './model/lector.model';
import { LectorService } from './service/lector.service';

@Component({
    selector: 'app-lector',
    templateUrl: './lector.component.html',
    styleUrls: ['./lector.component.scss'],
})
export class LectorComponent implements OnInit {
    modalShowLector: boolean = false;
    lectores: Lector[] = [];
    lector: Lector;
    prestamos: LibroLector[] = [];

    constructor(
        private lectorService: LectorService,
        private sharedService: SharedService
    ) {}

    ngOnInit(): void {
        this.lectorService.getLectores().subscribe((response: any) => {
            this.lectores = response;
        });
        this.getPrestamos();
    }

    getPrestamos() {
        this.sharedService.getPrestamos().subscribe((response: any) => {
            this.prestamos = response;
        })
    }

    validarPrestamos(idLector: number) {
        let prestamos = this.prestamos.filter((m) => m.lector.id == idLector);
        console.log('PRESTAMOSSS',prestamos);
        if (prestamos.length > 0) {
            this.sharedService.modalAlert(
                'No se puede eliminar el lector porque tiene prestamos asociados',
                '',
                'warning'
            );
            return false;
        } else {
            this.lectorService
                        .deleteLector(idLector)
                        .subscribe((response: any) => {
                            console.log(response);
                            this.sharedService.modalAlert(
                                'Lector eliminado correctamente',
                                '',
                                'success'
                            );
                            this.ngOnInit();
                        });
        }
    }

    eliminarLector(id: number) {
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

    modalLector(lector?: Lector) {
        this.lector = lector;
        this.modalShowLector = true;
    }

    modalCerrar() {
        this.modalShowLector = false;
        this.ngOnInit();
    }
}
