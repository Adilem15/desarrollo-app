import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./module/module.module').then(m => m.ModuloModule) },
  { path:'comprar',loadChildren:() => import('./comprar/comprar.module').then(m => m.ComprarModule),},
  {path: 'contactanos', loadChildren:()=> import('./contactanos/contactanos.module').then(m=> m.ContactanosModule)},
  {path: 'auth', loadChildren:()=> import('./auth/auth.module').then(m=> m.AuthModule)},
  { path: '**', redirectTo: '/productos', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

