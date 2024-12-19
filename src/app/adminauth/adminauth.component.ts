import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-adminauth',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './adminauth.component.html',
  styleUrl: './adminauth.component.css',
})
export class AdminauthComponent {
  captchaToken: string | null = null;
  email: string = '';
  password: string = '';
  constructor(private router: Router, private adminService: AdminService) {}
  onSubmit(): void {
    const loginData = {
      email: this.email,
      password: this.password,
    };

    this.adminService.login(loginData).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Welcome',
          text: 'Login successful',
          confirmButtonText: 'OK',
        }).then(() => {
          localStorage.setItem('admintoken', response.token);
          this.router.navigate(['/admin']);
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid email or password. Please try again.',
          confirmButtonText: 'OK',
        });
      }
    );
  }
}
