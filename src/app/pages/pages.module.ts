import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PanelComponent } from './panel/panel.component';
import { ResumenComponent } from './resumenes/resumen.component';
import { LibroComponent } from './libros/libro.component';
import { AlumnoComponent } from './alumnos/alumno.component';
// import { ComponentesService } from './services/componentes.service';
// import { RouterModule } from '@angular/router';
// import { AdminModule } from './admin/admin.module';
// import { MenuModule } from './menu/menu.module';
// import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    PanelComponent,
    ResumenComponent,
    LibroComponent,
    AlumnoComponent
  ],
  imports: [
    CommonModule,
    // RouterModule,
    // PagesRoutingModule,
    // AdminModule,
    // DashboardModule,
    // MenuModule,
  ],
  providers: [
    // ComponentesService,
  ]
})
export class PagesModule { }
