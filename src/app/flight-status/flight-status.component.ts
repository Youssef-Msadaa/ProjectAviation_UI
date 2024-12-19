import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-status',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './flight-status.component.html',
  styleUrls: ['./flight-status.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class FlightStatusComponent implements OnInit {
  @Input() initialFlightNumber: string | null = null; // Holds the initial flight number	
  flightStatusForm!: FormGroup;

  constructor(private fb:   FormBuilder,private router : Router) { }

  ngOnInit() {
    this.flightStatusForm = this.fb.group({
      searchType: ['flightNumber'], // Default search type is 'arrival'
      arrival: [''],
      departure: [''],
      flightNumber: [this.initialFlightNumber   || ''],
    });
  }

  onSearch() {
    const formValue = this.flightStatusForm.value;
    this.router.navigate(['flightstatus-result'], { queryParams: formValue });
    console.log('Form data:', formValue);

    // Handle your search logic here based on the selected searchType and form values
  }
}
