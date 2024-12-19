import { Component, OnInit } from '@angular/core';
import { RouterOutlet,RouterModule, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/services/authen.service';
import { UserServiceService } from '../../user-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isloggedin: boolean = false;
  userName: string = 'Guest'; // Default value
  selectedTab: string = 'flights';
  user: any;
  token: string = ''; // Store the token from localStorage or session
  private apiurl = 'http://localhost:3000/users/profile';
  
  constructor(private authservice:AuthService,private router: Router,private profileService:UserServiceService) {}
  ngOnInit(): void {
    this.isloggedin = this.authservice.loggedIn;
    if (this.isloggedin){
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
        this.authservice.logout();
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
