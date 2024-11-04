import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-flight',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,MatDatepickerModule,MatNativeDateModule,MatInputModule],
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})

export class FlightComponent implements OnInit {
  flightForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

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
    console.log('Form Values:', formValue);

    // Access dates based on the search type
    if (formValue.searchType === 'Round trip') {
      console.log('Round trip dates:', formValue.roundTripDates.startDate, formValue.roundTripDates.endDate);
    } else {
      console.log('Travel date:', formValue.travelDates);
    }

    // Handle your search logic here
  }
}

