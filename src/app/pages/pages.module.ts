import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ResumenComponent } from './resumenes/resumen.component';
import { LibroComponent } from './libros/libro.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
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

@NgModule({
  declarations: [
    ResumenComponent,
    LibroComponent,
    EstudianteComponent,
    EstadisticaComponent,
    EstadisticasBasicasComponent
  ],
  imports: [
    CommonModule,
    // RouterModule,
    // PagesRoutingModule,
    // AdminModule,
    // DashboardModule,
    // MenuModule,

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
    TableModule
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
    TableModule
  ]
})
export class PagesModule { }
