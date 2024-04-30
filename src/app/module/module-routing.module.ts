import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  { path: 'productos', component: ProductosComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloRoutingModule { }
