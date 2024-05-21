import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../../data/data-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  protected employee =  {};
  constructor(private service: DataServiceService){
    this.employee = this.service.oneEmployee()
    console.log(this.employee)  
  }
}
