import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SeatService {
  private baseUrl = 'http://localhost:3000/api/seatsflight'; // Base API URL

  constructor(private http: HttpClient) {}

  getAvailableSeats(flightId: string, seatClass: string) {
    const url = `${this.baseUrl}/${flightId}/seats/${seatClass}`; // Construct full URL
    console.log('Fetching available seats from:', url);
    return this.http.get<any>(url);
  }

  reserveSeat(flightId: string, seatClass: string, seatId: string) {
    const url = `${this.baseUrl}/${flightId}/seats/${seatClass}/reserve`; // Construct full URL
    return this.http.post<any>(url, { seatId });
  }
}
