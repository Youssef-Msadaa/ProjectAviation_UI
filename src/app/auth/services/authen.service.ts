// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users/login';
  loggedIn = false;
  constructor(private http: HttpClient, private router: Router) {}
  login(userData: any): Observable<any> {
    this.loggedIn = true;
    return this.http.post(this.apiUrl, userData);
  }

  


  logout(): void {
    localStorage.removeItem('token'); // Clear the token
    this.loggedIn = false;
    this.router.navigate(['/login']); // Redirect to login

  }
}
