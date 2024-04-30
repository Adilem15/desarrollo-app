import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.scss'
})
export class ContactosComponent {
  loginError: string='';
  logForm=this.formBuilder.group({
   name:['',[Validators.pattern('[a-zA-z]')]],
    email:['', [Validators.required, Validators.email]],
    phoneNumber: [,[Validators.maxLength(9), ]],
    texto:[,[Validators.pattern('[a-zA-z]')]]

  })
  constructor(private formBuilder:FormBuilder ){}
 
  login(){
    if (this.logForm.valid) {
     
     alert('Valido')
      this.logForm.reset
       } else{
      this.logForm.markAllAsTouched();
      
    } 
    } 
   }

