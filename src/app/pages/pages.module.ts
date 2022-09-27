import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ComentarioComponent } from './comentario/comentario.component';
import { LibroComponent } from './libro/libro.component';
import { LectorComponent } from './lector/lector.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { EstadisticasBasicasComponent } from './estadistica/components/estadisticas-basicas/estadisticas-basicas.component';
// import { ComponentesService } from './services/componentes.service';
// import { RouterModule } from '@angular/router';
// import { AdminModule } from './admin/admin.module';
// import { MenuModule } from './menu/menu.module';
// import { DashboardModule } from './dashboard/dashboard.module';

// Fuse Modules
import { FuseCardModule } from '@fuse/components/card';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
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
import { ModalLectorComponent } from './lector/components/modal-lector/modal-lector.component';
import { InputMaskModule } from 'primeng/inputmask';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ModalLibroComponent } from './libro/components/modal-libro/modal-libro.component';
import { TablaMonitoreoComponent } from './estadistica/components/tabla-monitoreo/tabla-monitoreo.component';


@NgModule({
  declarations: [
    ComentarioComponent,
    LibroComponent,
    LectorComponent,
    EstadisticaComponent,
    EstadisticasBasicasComponent,
    ModalLectorComponent,
    ModalLibroComponent,
    TablaMonitoreoComponent
  ],
  imports: [
    CommonModule,
    // RouterModule,
    // PagesRoutingModule,
    // AdminModule,
    // DashboardModule,
    // MenuModule,

    ReactiveFormsModule,

    //Fuse Modules
    FuseCardModule,
    FuseAlertModule,
    SharedModule,
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
  providers: [
    // ComponentesService,
  ],
  exports: [
    
    //Fuse Modules
    FuseCardModule,
    FuseAlertModule,
    SharedModule,
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
  ]
})
export class PagesModule { }
