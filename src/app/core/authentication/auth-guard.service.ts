import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private router: Router) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (localStorage.getItem('token')) {
        resolve(true);
      } else {
        this.router.navigate(['/auth/login']);
        resolve(false);
      }
    });
  }
}
