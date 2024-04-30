import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {path:"contactos", component:ContactosComponent},
  {path:"perfil", component:PerfilComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactanosRoutingModule { }
