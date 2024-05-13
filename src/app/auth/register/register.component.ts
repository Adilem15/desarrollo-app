import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private formBuilder: FormBuilder = inject(FormBuilder);
  protected registerForm: FormGroup;

  constructor() {
    this.registerForm = this.buildForm;
    console.log(this.registerForm.controls)
  }

  get buildForm() {
    return this.formBuilder.group({
      password: ['', [ Validators.required,Validators.minLength(3) ]],
      email: ['', [ Validators.required,Validators.minLength(10), Validators.email ]],
      age: [0, [ Validators.required,Validators.max(65), Validators.min(18) ]],
      birthdate: [new Date(), [ Validators.required ]],
      notification: [null],    
    });
  }


  get emailField(): AbstractControl {
    return this.registerForm.controls['email'];
  };
  get passwordField(): AbstractControl {
    return this.registerForm.controls['password'];
  };
  get ageField(): AbstractControl {
    return this.registerForm.controls['age'];
  };
  get birthdateField(): AbstractControl {
    return this.registerForm.controls['birthdate'];
  };

  get notificationField(): AbstractControl {
    return this.registerForm.controls['notification'];
  };

  validateForm(){
    if (this.registerForm.valid) {
      alert('valido')
      console.log(this.registerForm.value);
    } else {
      alert('No valido')
      console.log(this.registerForm.value);
    }
  }
  }
