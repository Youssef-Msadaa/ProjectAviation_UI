import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,MatDatepickerModule,MatNativeDateModule,MatInputModule],
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})

export class FlightComponent implements OnInit {
  flightForm!: FormGroup;

  constructor(private fb: FormBuilder ,private router : Router) { }

  ngOnInit() {
    this.flightForm = this.fb.group({
      searchType: ['One way'], // Default search type is 'One way'
    fromLocation: [''],       // Control for departure location
    toLocation: [''],         // Control for destination
    travelDates: [''],        // Control for travel date
    passengers: [1],          // Control for number of passengers
    roundTripDates: this.fb.group({
      startDate: [''],        // Control for round trip departure date
      endDate: ['']           // Control for round trip return date
    }),
  });

  this.flightForm.get('searchType')?.valueChanges.subscribe(value => {
    if (value === 'Round trip') {
      this.flightForm.get('travelDates')?.reset();
    } else {
      this.flightForm.get('roundTripDates')?.reset();
    }
  });
}

        


onSearch() {
  const formValue = this.flightForm.value;

  // Adjusting the search object based on the search type (One way or Round trip)
  const searchParams: any = {
    fromLocation: formValue.fromLocation,
    toLocation: formValue.toLocation,
    passengers: formValue.passengers, // Sending the passengers field
  };

  // For One-way, just add travelDates
  if (formValue.searchType === 'One way') {
    searchParams.travelDates = formValue.travelDates;
  } 
  // For Round trip, add both travelDates and roundTripDates
  else if (formValue.searchType === 'Round trip') {
    searchParams.travelDates = formValue.roundTripDates.startDate;
    searchParams.roundTripDates = formValue.roundTripDates; // Send both startDate and endDate
  }

  // Make the router navigate with the adjusted parameters
  this.router.navigate(['flight-search'], { queryParams: searchParams });

  // Log the search parameters for debugging
  console.log('Search Parameters:', searchParams);
}

}

