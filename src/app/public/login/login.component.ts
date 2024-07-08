import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  LoginForm!: FormGroup;

  constructor(private fb: FormBuilder , private router: Router) {
    this.createForm();
  }

  createForm() {
    this.LoginForm = this.fb.group({
      userName: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  submitForm() {
    if (this.LoginForm.valid) {
      console.log('submit', this.LoginForm.value);
    } else {
      Object.values(this.LoginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  toRegisterPage(){
    this.router.navigate(['/auth/register']);
  }
}
