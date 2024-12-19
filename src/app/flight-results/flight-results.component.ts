import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule instead of BrowserModule
import { FlightSearchService } from '../flight-search.service';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { SeatService } from '../seat.service';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { AuthService } from '../auth/services/authen.service';
import { UserServiceService } from '../user-service.service';



@Component({
  selector: 'app-flight-results',
  standalone: true,
  imports: [CommonModule, MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, NavbarComponent], // Use CommonModule instead of BrowserModule
  templateUrl: './flight-results.component.html',
  styleUrls: ['./flight-results.component.css']
})
export class FlightResultsComponent implements OnInit {
  searchParams: any = {};
  flights: any[] = []; // Store flight search results
  selectedSeat: string = '';
  availableSeats: any[] = [];  
  isLoggedIn: boolean = false; // Login status
  token: string = ''; // User token
  userName: string = ''; // Default
  isLoading: boolean = true; // Loading flag
  error: string = ''; // Error message if API fails
  selectedFlight: any = null; // Vol sélectionné
  seatClass: string = 'economy'; // Default seat class

 
  constructor(
    private route: ActivatedRoute,
    private flightSearchService: FlightSearchService,
    private seatService: SeatService,
    private authService:AuthService,private profileService:UserServiceService

  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.loggedIn;

    if (this.isLoggedIn) {
      this.token = localStorage.getItem('token') || '';

      if (this.token) {
        // Fetch user profile using the token
        this.profileService.getProfile(this.token).subscribe(
          (response) => {
            this.userName = response.fullname; // Assuming the response contains fullname
          },
          (error) => {
            this.error = 'Error fetching user profile.';
            console.error('Error fetching user profile:', error);
          }
        );
      }
    } else {
      this.error = 'You must be logged in to proceed with the booking.';
    }

    
    
    
    // Retrieve query parameters passed from flight search form
    this.route.queryParams.subscribe((params) => {
      this.searchParams = params;
      console.log('Received search parameters:', this.searchParams);
      this.getSearchResults();



    });
  }

  getSearchResults() {
    this.isLoading = true;

    // Call backend service with search parameters
    this.flightSearchService.searchFlights(this.searchParams).subscribe({
      next: (response) => {
        console.log('Response from backend:', response);
        this.flights = response || [];
        this.isLoading = false;
        console.log('Search results:', this.flights);
      },
      error: (err) => {
        console.error('Error fetching flights:', err);
        this.error = 'Failed to load flight search results. Please try again.';
        this.isLoading = false;
      },
    });
  }

  selectFlight(flight: any, seatClass: 'economy' | 'business') {
    this.selectedFlight = { ...flight, ticketType: seatClass };
    this.seatClass = seatClass;
    this.loadAvailableSeats();
    console.log('Vol sélectionné :', this.selectedFlight);
  }

  loadAvailableSeats() {
    if (this.selectedFlight) {
      const flightId = this.selectedFlight.flightNumber;
      const seatClass = this.seatClass;
      console.log('Loading available seats for flight:', flightId, 'and seat class:', seatClass);
      
  
      this.seatService.getAvailableSeats(flightId, seatClass).subscribe({
        next: (response) => {
          this.availableSeats = response.availableSeats || [];
        },
        error: (err) => {
          console.error('Error fetching available seats:', err);
          this.error = 'Could not load available seats.';
        },
      });
    }
  }
  

  selectSeat(seatId: string) {
    this.selectedSeat = seatId; // Mark the selected seat
    console.log('Seat selected:', seatId);
  }


  /*reserveSeat() {
    if (this.selectedSeat && this.selectedFlight) {
      const flightId = this.selectedFlight.id;
      const seatClass = this.seatClass;
      const seatId = this.selectedSeat;
  
      this.seatService.reserveSeat(flightId, seatClass, seatId).subscribe({
        next: (response) => {
          console.log('Seat reserved successfully:', response);
          this.loadAvailableSeats(); // Refresh the seat availability
        },
        error: (err) => {
          console.error('Error reserving seat:', err);
          this.error = `Could not reserve seat ${seatId}. Please try again.`;
        },
      });
    }
  }*/
  



  confirmAndPay() {
   console.log('Payment confirmed');
   
  }
}
