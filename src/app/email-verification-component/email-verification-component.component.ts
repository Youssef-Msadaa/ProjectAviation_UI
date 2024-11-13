import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-email-verification-component',
  standalone: true,
  imports: [CommonModule],
  template: `<div
      *ngIf="verificationStatus === 'Email verified successfully'"
      class="success-message"
    >
      Your email has been successfully verified! You can now log in.
    </div>
    <div
      *ngIf="verificationStatus === 'An error occurred during verification'"
      class="error-message"
    >
      The verification link is invalid or has expired. Please try registering
      again.
    </div> `,
  styleUrl: './email-verification-component.component.css',
})
export class EmailVerificationComponentComponent {
  verificationStatus: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    const uniqueString = this.route.snapshot.paramMap.get('uniqueString');
    if (uniqueString) {
      this.verifyEmail(uniqueString);
    }
  }
  verifyEmail(uniqueString: string): void {
    this.http
      .get<{ message: string }>(
        `http://localhost:3000/users/verify/${uniqueString}`
      )
      .subscribe(
        (response) => {
          console.log(response);
          this.verificationStatus = response.message;
          // Redirect to login or dashboard after a short delay
          setTimeout(() => {
            this.router.navigate(['/auth/login']);
          }, 2000);
        },
        (error) => {
          this.verificationStatus =
            'Verification failed. Link may be invalid or expired.';
        }
      );
  }
}
