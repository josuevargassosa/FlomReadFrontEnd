import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'app/shared/services/shared.service';
import { map } from 'lodash';
import { finalize, Observable, Subject, Subscription } from 'rxjs';
import { Libro } from '../../model/libro.model';
import { LibroService } from '../../service/libro.service';

@Component({
    selector: 'app-modal-libro',
    templateUrl: './modal-libro.component.html',
    styleUrls: ['./modal-libro.component.scss'],
})
export class ModalLibroComponent implements OnInit {
    @Input() modalShowLibro;
    @Input() libro: Libro;
    @Output() modalCerrar = new EventEmitter<Boolean>();

    titulo: string;
    fileBook: File;
    photoBook: string;

    libroForm = new FormGroup({
        nombre: new FormControl('', Validators.required),
        autor: new FormControl('', Validators.required),
        resumen: new FormControl(''),
        fotoPortada: new FormControl('', Validators.required),
        estado: new FormControl('A'),
        cantidad: new FormControl(0, Validators.required),
        codigo: new FormControl(''),
    });

    constructor(
        private libroService: LibroService,
        private sharedService: SharedService
    ) {}

    ngOnInit() {}

    showModal() {
        console.log(this.libro);
        this.titulo = this.libro != undefined ? 'Editar Libro' : 'Crear Libro';
        if (this.libro) {
            console.log('Editar');
            this.libroForm.controls['nombre'].setValue(this.libro.nombre);
            this.libroForm.controls['autor'].setValue(this.libro.autor);
            this.libroForm.controls['resumen'].setValue(this.libro.resumen);
            this.libroForm.controls['fotoPortada'].setValue(
                this.libro.fotoPortada
            );
            this.photoBook = this.libro.fotoPortada;
            this.libroForm.controls['estado'].setValue(this.libro.estado);
            this.libroForm.controls['cantidad'].setValue(this.libro.cantidad);
            this.libroForm.controls['codigo'].setValue(this.libro.codigo);
        } else {
            this.libroForm.reset();
        }
    }

    onFileChange(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.fileBook = file;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.photoBook = reader.result as string;
                this.libroForm.controls['fotoPortada'].setValue(this.photoBook);
            };
        }
    }

    cerrar() {
        this.modalCerrar.emit(false);
        this.photoBook = '';
        this.libroForm.reset();
    }

    uploadPhoto() {
        const formData = new FormData();
        formData.append(
            'file',
            this.fileBook,
            this.libroForm.controls['nombre'].value
        );
        this.libroService.postFile(formData).subscribe((response: any) => {
            this.libroForm.controls['fotoPortada'].setValue(
                response.secure_url
            );
            this.crearLibro(response.secure_url);
        });
    }

    async crear() {
        if (this.libroForm.valid) {
            if (this.libro) {
                //Editar
                this.libroService
                    .actualizarLibro(
                        this.libroForm.value as Libro,
                        this.libro.id
                    )
                    .subscribe((response: any) => {
                        console.log(response);
                        this.cerrar();
                        this.sharedService.modalAlert(
                            'Actualizado exitosamente',
                            'El libro fue actualizado correctamente',
                            'success'
                        );
                    });
            } else {
                //Crear
                this.libroForm.controls['estado'].setValue('A');
                await this.getLibroByCodigo(
                    this.libroForm.controls['codigo'].value
                );
            }
        }
    }

    getLibroByCodigo(codigo: string) {
        this.libroService.getLibroByCodigo(codigo).subscribe(
            (response: Libro) => {
                console.log('Libro existente', response);
                this.modalCerrar.emit(false);
                this.sharedService
                    .modalAlertButtons(
                        `El libro ${response.nombre} con codigo ${response.codigo} ya existe en el sistema, desea activarlo?`
                    )
                    .then((result) => {
                        if (result.isConfirmed) {
                            this.libroService
                                .updateStateLibro(response.id, 'A')
                                .subscribe((response: Libro) => {
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
                this.uploadPhoto();
            }
        );
    }

    crearLibro(url) {
        console.log('URLLLL', url);
        console.log('FORM', this.libroForm.value);
        this.libroForm.controls['fotoPortada'].setValue(url);
        this.libroService.crearLibro(this.libroForm.value as Libro).subscribe(
            (response: any) => {
                console.log(response);
                this.cerrar();
                this.sharedService.modalAlert(
                    'Creado exitosamente',
                    'El libro fue creado correctamente',
                    'success'
                );
            },
            (error) => {
                this.sharedService.modalAlert('Error', error.message, 'error');
            }
        );
    }
}
