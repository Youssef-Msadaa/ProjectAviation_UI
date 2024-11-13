import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/authen.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private logService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.logService.login(this.loginForm.value).subscribe(
        (response: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'You are now logged in!',
            confirmButtonText: 'Continue',
          }).then(() => {
            localStorage.setItem('token', response.token); // Save JWT token to local storage
            this.router.navigate(['/Userdashboard']); // Redirect user to dashboard or another page
          });
        },
        (error) => {
          let errorMessage = 'Email or password invalid. Please try again.';

          // Customize the error message based on the API response
          if (error.error === 'Please verify your email before logging in') {
            errorMessage = 'Please verify your email before logging in.';
          } else if (error.error === 'Email or password invalid') {
            errorMessage = 'Email or password invalid. Please try again.';
          }

          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: errorMessage,
            confirmButtonText: 'Retry',
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Input',
        text: 'Please enter both email and password.',
        confirmButtonText: 'OK',
      });
    }
  }
}
