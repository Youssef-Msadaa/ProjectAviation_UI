import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/authen.service';
import { FlightComponent } from '../flight/flight.component';
import { CheckInComponent } from '../check-in/check-in.component';
import { FlightStatusComponent } from '../flight-status/flight-status.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [
    FlightComponent,
    CheckInComponent,
    FlightStatusComponent,
    CommonModule,
  ],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css',
})
export class UserDashboardComponent implements OnInit {
  user: any;
  selectedTab: string = 'flights';
  userName: string = 'Guest'; // Default value
  token: string = ''; // Store the token from localStorage or session
  private apiurl = 'http://localhost:3000/users/profile';
  constructor(
    private authService: AuthService,
    private router: Router,
    private profileService: UserServiceService
  ) {}
  ngOnInit() {
    // Get the token from localStorage/session (wherever you store it)
    this.token = localStorage.getItem('token') || '';

    // Fetch the profile name using the token
    if (this.token) {
      this.profileService.getProfile(this.token).subscribe(
        (response) => {
          // Assuming the response contains 'fullname' from the backend
          this.userName = response;
        },
        (error) => {
          console.error('Error fetching user profile', error);
        }
      );
    }
  }
  logout(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, log me out',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout();
        this.router.navigate(['/']);
        Swal.fire(
          'Logged Out',
          'You have been logged out successfully.',
          'success'
        );
      }
    });
  }
}
