import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuloModule } from './module/module.module';
import { ProductService } from './shared/product.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuloModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
