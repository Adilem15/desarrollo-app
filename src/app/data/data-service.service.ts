import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  employees: Array<{
    name: string,
    age: number,
    phone: string
  }> = [
    {
      name: 'Juan',
      age: 30,
      phone: '123456789'
    },
    {
      name: 'Pedro',
      age: 20,
      phone: '123456789'
    }
  ]
  employee: {
    name?: string,
    age?: number,
    phone?: string
  } = {}
  oneEmployee(){
    const employee = JSON.parse(sessionStorage.getItem('employee')!)
    return employee
  }
   setEmployee (value: any){
    const newEmployee = sessionStorage.setItem('employee', JSON.stringify(value))
    return newEmployee
    }
}
