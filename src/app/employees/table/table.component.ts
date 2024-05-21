import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../../data/data-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  constructor(private router: Router, private service: DataServiceService){}
  empolyees: Array<{
    name: string,
    age: number,
    phone: string
  }> = this.service.employees

    editEmployee(value:any) {
      this.service.setEmployee(value)
      this.router.navigate(['/employees/edit']);
    }
}
