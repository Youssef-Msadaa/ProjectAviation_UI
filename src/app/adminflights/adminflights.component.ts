import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-adminflights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adminflights.component.html',
  styleUrls: ['./adminflights.component.css'],
})
export class AdminflightsComponent {
  flights = [
    {
      id: 'F123',
      airline: 'Tunisair',
      destination: 'Dubai',
      departureTime: '2024-12-20 14:00',
      status: 'On Time',
    },
    {
      id: 'F124',
      airline: 'Tunisair',
      destination: 'Doha',
      departureTime: '2024-12-20 16:30',
      status: 'Delayed',
    },
    {
      id: 'F125',
      airline: 'Tunisair',
      destination: 'Paris',
      departureTime: '2024-12-21 08:00',
      status: 'Cancelled',
    },
    {
      id: 'F126',
      airline: 'Tunisair',
      destination: 'Frankfurt',
      departureTime: '2024-12-21 10:00',
      status: 'On Time',
    },
  ];

  editFlight(flightId: string): void {
    console.log(`Editing flight with ID: ${flightId}`);
    // Logic for editing the flight
  }

  deleteFlight(flightId: string): void {
    console.log(`Deleting flight with ID: ${flightId}`);
    // Logic for deleting the flight
  }
}
