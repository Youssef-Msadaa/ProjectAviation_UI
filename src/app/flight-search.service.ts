import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightSearchService {
  private apiUrl = 'http://localhost:3000/api/flights'; // Point d'API à ajuster

  constructor(private http: HttpClient) {}

  searchFlights(criteria: any): Observable<any> {
    console.log('Search criteria:', criteria);
    return this.http.post<any>(this.apiUrl, criteria);
    
    
  }
}
