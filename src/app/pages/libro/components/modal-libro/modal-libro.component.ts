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
    photoBook: File;

    libroForm = new FormGroup({
        nombre: new FormControl('', Validators.required),
        autor: new FormControl('', Validators.required),
        resumen: new FormControl(''),
        fotoPortada: new FormControl(''),
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
            this.photoBook = file;
            console.log(this.photoBook);
        }
    }

    uploadPhoto() {
        const formData = new FormData();
        formData.append(
            'file',
            this.photoBook,
            this.libroForm.controls['nombre'].value
        );
        this.libroService.postFile(formData).subscribe((response: any) => {
            console.log(response.secure_url);
            this.modalCerrar.emit(false);
            this.libroForm.controls['fotoPortada'].setValue(
                response.secure_url
            );
            this.crearLibro(response.secure_url);
        });
    }

    cerrar() {
        this.modalCerrar.emit(false);
    }

    async crear() {
        if (this.libro) {
            //Editar
            this.libroService
                .actualizarLibro(this.libroForm.value as Libro, this.libro.id)
                .subscribe((response: any) => {
                    console.log(response);
                    this.modalCerrar.emit(false);
                    this.sharedService.modalAlert(
                        'Actualizado exitosamente',
                        'El libro fue actualizado correctamente',
                        'success'
                    );
                });
        } else {
            //Crear
            this.libroForm.controls['estado'].setValue('A');
            await this.uploadPhoto();
        }
    }

    crearLibro(url) {
        console.log('URLLLL', url);
        console.log('FORM', this.libroForm.value);
        this.libroForm.controls['fotoPortada'].setValue(url);
        this.libroService.crearLibro(this.libroForm.value as Libro).subscribe(
            (response: any) => {
                console.log(response);
                this.modalCerrar.emit(false);
                this.sharedService.modalAlert(
                    'Creado exitosamente',
                    'El libro fue creado correctamente',
                    'success'
                );
            },
            (error) => {
                this.sharedService.modalAlert(
                    'Error',
                    'No se pudo crear el libro',
                    'error'
                );
            }
        );
    }
}
