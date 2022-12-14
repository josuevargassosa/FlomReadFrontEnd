import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrestamoLibroComponent } from './components/prestamo-libro/prestamo-libro.component';
import { PagesModule } from 'app/pages/pages.module';

import { FuseCardModule } from '@fuse/components/card';
import { FuseAlertModule } from '@fuse/components/alert';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { SkeletonModule } from 'primeng/skeleton';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartModule } from 'primeng/chart';
import { BlockUIModule } from 'primeng/blockui';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { AvatarModule } from 'primeng/avatar';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { OrderListModule } from 'primeng/orderlist';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DropdownModule } from 'primeng/dropdown';
import { SharedService } from './services/shared.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        //FUZE
        FuseCardModule,
        FuseAlertModule,
        SkeletonModule,
        ScrollPanelModule,
        NgApexchartsModule,
        ChartModule,
        PanelModule,
        ButtonModule,
        BadgeModule,
        InputTextareaModule,
        InputNumberModule,
        AvatarModule,
        RatingModule,
        DialogModule,
        OrderListModule,
        TableModule,
        InputTextModule,
        InputMaskModule,
        KeyFilterModule,
        DropdownModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PrestamoLibroComponent,

        //FUZE
        FuseCardModule,
        FuseAlertModule,
        SkeletonModule,
        ScrollPanelModule,
        NgApexchartsModule,
        ChartModule,
        PanelModule,
        ButtonModule,
        BadgeModule,
        InputTextareaModule,
        InputNumberModule,
        AvatarModule,
        RatingModule,
        DialogModule,
        OrderListModule,
        TableModule,
        InputTextModule,
        InputMaskModule,
        KeyFilterModule,
        DropdownModule
    ],
    declarations: [
      PrestamoLibroComponent
    ],
    entryComponents: [
        PrestamoLibroComponent
    ],
    providers: [
        SharedService
    ]

})
export class SharedModule
{
}
