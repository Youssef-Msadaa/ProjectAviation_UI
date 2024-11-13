import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private apiUrl = 'http://localhost:3000/users/register';
  private apiUrl2 = 'http://localhost:3000/users/profile';

  constructor(private http: HttpClient) {}
  register(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
  getProfile(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`, // Set the token in the header
    });

    // Make a GET request to the profile endpoint with headers
    return this.http.get(this.apiUrl2, { headers, responseType: 'text' });
  }
}
