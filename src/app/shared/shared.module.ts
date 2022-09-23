import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrestamoLibroComponent } from './components/prestamo-libro/prestamo-libro.component';
import { PagesModule } from 'app/pages/pages.module';

import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PrestamoLibroComponent
    ],
    declarations: [
      PrestamoLibroComponent
    ],
    entryComponents: [
        PrestamoLibroComponent
    ]

})
export class SharedModule
{
}
