import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FlightApiResponse } from './flight-api-response.model';
import { FlightStatusComponent } from "../flight-status/flight-status.component";
import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
  selector: 'app-flightstatus-results',
  standalone: true,
  imports: [CommonModule, FlightStatusComponent, NavbarComponent], // Import CommonModule for template directives (e.g., *ngIf, *ngFor)
  templateUrl: './flightstatus-results.component.html',
  styleUrls: ['./flightstatus-results.component.css'], // Fixed typo
})
export class FlightstatusResultsComponent implements OnInit {
  flightNumber: string | null = null; // Holds the flight number from query params
  flightData: any = null; // Holds the data fetched from the API
  apiUrl = 'https://api.aviationstack.com/v1/flights?access_key=2c7ff09e684198e18a650848cb7c0728&airline_icao=TAR&flight_iata=';
  flightdata:any[]=[];
  
  // Inject HttpClient and ActivatedRoute
  constructor(private http: HttpClient, private route: ActivatedRoute, private cdr: ChangeDetectorRef) {console.log('FlightstatusResultsComponent initialized')}

  ngOnInit(): void {
    // Fetch query parameters when the component is initialized
    console.log('we are in the flight status result component');
    console.log('Query Params:', this.route.snapshot.queryParams); // Debug: Log query params
    this.route.queryParams.subscribe((params) => {
      this.flightNumber = params['flightNumber'] || null; // 'formValue' matches the query param key
      console.log('Flight Number:', this.flightNumber); // Debug: Log flight number
      if (this.flightNumber) {
        this.getFlightData();
      }
    });
  }

  // Fetch flight data using the API
  getFlightData(): void {
    this.http.get<FlightApiResponse>(this.apiUrl + this.flightNumber).subscribe({
      next: (response) => {
        this.flightData = response.data || []; // Assign the flight data to the component property;
        console.log('Flight Data:', this.flightData); // Debug: Log API response
        this.cdr.detectChanges(); // Manually trigger change detection
      },
      error: (err) => {
        console.error('Error fetching flight data:', err);
      },
    });
  }

  calculateTimeDifference(departureTime: string, arrivalTime: string): string {
    // Calculate the time difference between the departure and arrival times
    const departure = new Date(departureTime);
    const arrival = new Date(arrivalTime);
    const timeDifference = arrival.getTime() - departure.getTime();
    const hours = Math.floor(timeDifference / 1000 / 60 / 60);
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    return `${hours}h ${minutes}m`;
  }


    
}
