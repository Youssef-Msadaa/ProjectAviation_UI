import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/authen.service';
import { FlightComponent } from "../flight/flight.component";
import { CheckInComponent } from "../check-in/check-in.component";
import { FlightStatusComponent } from "../flight-status/flight-status.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [FlightComponent, CheckInComponent, FlightStatusComponent,CommonModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit {
  user:any
  selectedTab: string = 'flights';
  //constructor(private authService: AuthService) { }

  ngOnInit(): void {
    //this.user=this.authService.getUser()
  }

}
