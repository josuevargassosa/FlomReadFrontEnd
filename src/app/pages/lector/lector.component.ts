import { Component, OnInit } from '@angular/core';
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

    constructor(private lectorService: LectorService) {}

    ngOnInit(): void {
        this.lectorService.getLectores().subscribe((response: any) => {
            this.lectores = response;
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
