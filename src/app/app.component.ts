import { Component } from '@angular/core';
import { RouterOutlet,RouterModule, RouterLink } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { Router } from '@angular/router';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent,RouterModule,RouterLink,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectAviation';
  constructor(private router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/auth/login';
  }
}
