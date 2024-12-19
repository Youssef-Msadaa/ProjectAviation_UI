import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('admintoken');
    } else {
      console.error('localStorage is not available');
    }
    const token = localStorage.getItem('admintoken');
    if (token) {
      return true;
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Access Denied',
        text: "You don't have access to this page. Please log in first.",
        confirmButtonText: 'Go to Home',
      }).then(() => {
        this.router.navigate(['/adminauth']);
      });
      return false;
    }
  }
}
