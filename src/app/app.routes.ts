import { Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EmailVerificationComponentComponent } from './email-verification-component/email-verification-component.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { FlightstatusResultsComponent } from './flightstatus-results/flightstatus-results.component';
import { FlightResultsComponent } from './flight-results/flight-results.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '', component: HomeComponent },
  {
    path: 'Userdashboard',
    component: UserDashboardComponent,
    canActivate: [AuthGuard],
  },

    {path:"flightstatus-result",component:FlightstatusResultsComponent},
  {
    path: 'verify/:uniqueString',
    component: EmailVerificationComponentComponent,
  },
  { path:"flight-search",component:FlightResultsComponent

  },
  
  {path:"test",component:TestComponent
  }

];
