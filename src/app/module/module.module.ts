import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ModuloRoutingModule } from './module-routing.module';

@NgModule({
  declarations: [
    ProductosComponent,
    DetalleComponent
  ],
  imports: [
    RouterModule,
    ModuloRoutingModule
  ]
})
export class ModuloModule { }
