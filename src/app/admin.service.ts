import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = 'http://localhost:3000/admin/login';
  constructor(private http: HttpClient) {}
  login(loginData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, loginData);
  }
}
