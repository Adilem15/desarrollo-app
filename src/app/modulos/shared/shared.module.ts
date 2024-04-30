import { NgModule } from '@angular/core';


import { HeaderComponent } from './header/header.component';
import { SharedRoutingModule } from './shared-routing.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
