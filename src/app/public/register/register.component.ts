import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  LoginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.LoginForm = this.fb.group({
      userName: [null, Validators.required],
      password: [null, Validators.required],
      name:[null, Validators.required],
      confirmPassword: [null, Validators.required],
    });
  }

  submitForm() {
    if (this.LoginForm.valid) {
      if(this.LoginForm.controls['password'].value === this.LoginForm.controls['confirmPassword'].value){
        console.log('submit', this.LoginForm.value);
      }
    } else {
      Object.values(this.LoginForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  toLoginPage(){
    this.router.navigate(['/auth/login']);
  }
}
