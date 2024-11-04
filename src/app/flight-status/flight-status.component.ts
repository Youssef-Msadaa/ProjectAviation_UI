import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-flight-status',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './flight-status.component.html',
  styleUrls: ['./flight-status.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class FlightStatusComponent implements OnInit {
  flightStatusForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.flightStatusForm = this.fb.group({
      searchType: ['arrival'], // Default search type is 'arrival'
      arrival: [''],
      departure: [''],
      flightNumber: ['']
    });
  }

  onSearch() {
    const formValue = this.flightStatusForm.value;
    console.log('Form data:', formValue);

    // Handle your search logic here based on the selected searchType and form values
  }
}
