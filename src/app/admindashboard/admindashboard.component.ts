import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css',
})
export class AdmindashboardComponent {
  constructor(private router: Router) {}
  logout() {
    // Show confirmation alert using SweetAlert2
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Remove the admin token from localStorage
        localStorage.removeItem('admintoken');

        // Show the second confirmation alert for successful logout
        Swal.fire({
          title: 'Logged out successfully!',
          text: 'You have been logged out.',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Okay',
        }).then(() => {
          // Navigate to the /adminauth path after the second alert is closed
          this.router.navigate(['/adminauth']);
        });
      }
    });
  }
}
