import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
    FormControl,
    FormGroup,
    UntypedFormControl,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { SharedService } from 'app/shared/services/shared.service';
import { grados, Instituciones } from '../../../../shared/constantes';
import { Lector } from '../../model/lector.model';
import { LectorService } from '../../service/lector.service';
@Component({
    selector: 'app-modal-lector',
    templateUrl: './modal-lector.component.html',
    styleUrls: ['./modal-lector.component.scss'],
})
export class ModalLectorComponent implements OnInit {
    @Input() modalShowLector;
    @Input() lector: Lector;
    @Output() modalCerrar = new EventEmitter<Boolean>();

    lectorForm = new FormGroup({
        nombres: new FormControl('', Validators.required),
        apellidos: new FormControl('', Validators.required),
        identificacion: new FormControl('', Validators.required),
        edad: new FormControl(undefined, Validators.required),
        correo: new FormControl('', Validators.required),
        grado: new FormControl('', Validators.required),
        fotoPerfil: new FormControl(''),
        estado: new FormControl('A'),
        clave: new FormControl(''),
        institucion: new FormControl('', Validators.required),
        sexo: new FormControl('', Validators.required),
    });

    grados = grados;
    instituciones = Instituciones;

    constructor(
        private lectorService: LectorService,
        private sharedService: SharedService
    ) {}

    ngOnInit(): void {}

    showModal() {
        if (this.lector) {
            this.lectorForm.controls['nombres'].setValue(this.lector.nombres);
            this.lectorForm.controls['apellidos'].setValue(
                this.lector.apellidos
            );
            this.lectorForm.controls['identificacion'].setValue(
                this.lector.identificacion
            );
            this.lectorForm.controls['edad'].setValue(this.lector.edad);
            this.lectorForm.controls['correo'].setValue(this.lector.correo);
            this.lectorForm.controls['grado'].setValue(this.lector.grado);
            this.lectorForm.controls['institucion'].setValue(
                this.lector.institucion
            );
            this.lectorForm.controls['sexo'].setValue(this.lector.sexo);
        } else {
            this.lectorForm.reset();
        }
    }

    cerrar() {
        this.modalCerrar.emit(false);
    }

    crear() {
        if (this.lectorForm.valid) {
            this.lectorForm.controls['clave'].setValue(
                this.lectorForm.controls['identificacion'].value
            );

            if (this.lector) {
                //Editar
                this.lectorService
                    .actualizarLector(
                        this.lectorForm.value as Lector,
                        this.lector.id
                    )
                    .subscribe((response: any) => {
                        console.log(response);
                        this.modalCerrar.emit(false);
                        this.sharedService.modalAlert(
                            'Actualizado exitosamente',
                            'El lector fue actualizado correctamente',
                            'success'
                        );
                    });
            } else {
                //Crear
                this.lectorForm.controls['estado'].setValue('A');
                this.getLectorByCorreo(
                    this.lectorForm.controls['correo'].value
                );
            }
        }
    }

    getLectorByCorreo(correo: string) {
        this.lectorService.getLectorByCorreo(correo).subscribe(
            (response: Lector) => {
                console.log('Lector existente', response);
                this.modalCerrar.emit(false);
                this.sharedService
                    .modalAlertButtons(
                        `El lector ${response.nombres} con correo ${response.correo} ya existe en el sistema, desea activarlo?`
                    )
                    .then((result) => {
                        if (result.isConfirmed) {
                            this.lectorService
                                .actualizarEstadoLector(response.id, 'A')
                                .subscribe((response: any) => {
                                    console.log(response);
                                    this.cerrar();
                                    this.sharedService.modalAlert(
                                        'Reactivado exitosamente',
                                        'El libro fue reactivado correctamente',
                                        'success'
                                    );
                                });
                        }
                    });
            },
            (error) => {
                console.log(error);
                this.crearLector();
            }
        );
    }

    crearLector() {
        this.lectorService
            .crearLector(this.lectorForm.value as Lector)
            .subscribe((response: any) => {
                console.log(response);
                this.modalCerrar.emit(false);
                this.sharedService.modalAlert(
                    'Creado exitosamente',
                    'El lector fue creado correctamente',
                    'success'
                );
            });
    }
}
