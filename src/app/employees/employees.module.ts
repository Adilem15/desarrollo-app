import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { TableComponent } from './table/table.component';
import { EditComponent } from './edit/edit.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    TableComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule
  ]
})
export class EmployeesModule { }
