import { Component } from '@angular/core';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { FlightComponent } from "../flight/flight.component";
import { CommonModule } from '@angular/common';
import { CheckInComponent } from '../check-in/check-in.component';
import { FlightStatusComponent } from '../flight-status/flight-status.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent ,CommonModule, CheckInComponent, FlightStatusComponent,FlightComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedTab: string = 'flights'; // Default tab
}
