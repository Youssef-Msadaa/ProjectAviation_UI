import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      // Token exists, user is authenticated
      return true;
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Access Denied',
        text: "You don't have access to this page. Please log in first.",
        confirmButtonText: 'Go to Home',
      }).then(() => {
        this.router.navigate(['/']); // Redirect to the home page
      });
      return false;
    }
  }
}
