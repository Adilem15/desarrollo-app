import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'comprar',
    loadChildren:() => import('./comprar/comprar.module').then(m => m.ComprarModule),
  },
  { path: '', loadChildren: () => import('./module/module.module').then(m => m.ModuloModule) },
  { path: '**', redirectTo: '/productos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

