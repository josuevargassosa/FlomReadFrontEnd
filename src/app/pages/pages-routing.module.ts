import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialDataResolver } from 'app/app.resolvers';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { LayoutComponent } from 'app/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin/menu', pathMatch: 'full', },

  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: LayoutComponent,
    resolve: {
      initialData: InitialDataResolver,
    },
    children: [

      // ADMIN
      {
        path: 'admin', children: [

          // { path: '', loadChildren: () => import('app/pages/admin/admin.module').then(m => m.AdminModule) },
          // { path: 'dashboard', loadChildren: () => import('app/pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
          // { path: 'configuracion', loadChildren: () => import('app/pages/info-negocio/info-negocio.module').then(m => m.InfoNegocioModule) },
          // { path: 'menu', loadChildren: () => import('app/pages/menu/menu.module').then(m => m.MenuModule) },
          // { path: 'planes', component: VerPlanComponent },

        ],

      },
    ]
  },

  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: LayoutComponent,
    data: {
      layout: 'empty'
    },
    children: [
      // { path: 'sign-out', component: AuthSignOutComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
