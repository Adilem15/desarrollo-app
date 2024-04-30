import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactanosRoutingModule } from './contactanos-routing.module';
import { ContactosComponent } from './contactos/contactos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ContactosComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    ContactanosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class ContactanosModule { }
