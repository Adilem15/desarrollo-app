import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprarRoutingModule } from './comprar-routing.module';
import { CarritoComponent } from './carrito/carrito.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    CarritoComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ComprarRoutingModule
  ]
})
export class ComprarModule { }
