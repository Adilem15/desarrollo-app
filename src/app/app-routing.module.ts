import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'auth', loadChildren:()=> import('./auth/auth.module').then(m=> m.AuthModule)},
  {path: 'employees', loadChildren:()=> import('./employees/employees.module').then(m=>m.EmployeesModule)},
  { path: '**', redirectTo: '/auth', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

