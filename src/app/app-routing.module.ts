import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutingModule } from './modulos/dashboard/dashboard-routing.module';
import { SharedRoutingModule } from './modulos/shared/shared-routing.module';
import { DashboardModule } from './modulos/dashboard/dashboard.module';

const routes: Routes = [
  { path: 'dashboard',
  loadChildren:() => import('./modulos/dashboard/dashboard.module').then(m => m.DashboardModule),
 },
 { path: 'shared',
  loadChildren:() => import('./modulos/shared/shared.module').then(m => m.SharedModule),
 },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
