import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-addflight',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css'],
})
export class AddflightComponent {
  flight = {
    id: '',
    airline: '',
    destination: '',
    departureTime: '',
    status: 'On Time',
  };

  addFlight(): void {
    console.log('Flight added:', this.flight);
    // Logic to save the flight to a database or service can be added here
    alert(`Flight ${this.flight.id} has been successfully added!`);
    this.resetForm();
  }

  resetForm(): void {
    this.flight = {
      id: '',
      airline: '',
      destination: '',
      departureTime: '',
      status: 'On Time',
    };
  }
}
