import { Component, OnInit } from '@angular/core';
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

    constructor(
        private lectorService: LectorService,
        private sharedService: SharedService
    ) {}

    ngOnInit(): void {
        this.lectorService.getLectores().subscribe((response: any) => {
            this.lectores = response;
        });
    }

    eliminarLector(id: number) {
        console.log(id);
        this.sharedService
            .modalAlertButtons('¿Esta seguro de eliminar el registro?')
            .then((result) => {
                if (result.isConfirmed) {
                    this.lectorService
                        .deleteLector(id)
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

    modalLector(lector?: Lector) {
        this.lector = lector;
        this.modalShowLector = true;
    }

    modalCerrar() {
        this.modalShowLector = false;
        this.ngOnInit();
    }
}
