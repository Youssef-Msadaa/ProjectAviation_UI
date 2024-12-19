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
import { AdminauthComponent } from './adminauth/adminauth.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminGuard } from './guards/admin.guard';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { UsersComponent } from './users/users.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminflightsComponent } from './adminflights/adminflights.component';
import { AddflightComponent } from './addflight/addflight.component';
import { ReportsComponent } from './reports/reports.component';
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

  { path: 'flightstatus-result', component: FlightstatusResultsComponent },
  {
    path: 'verify/:uniqueString',
    component: EmailVerificationComponentComponent,
  },
  { path: 'flight-search', component: FlightResultsComponent },

  { path: 'test', component: TestComponent },
  { path: 'adminauth', component: AdminauthComponent },
  {
    path: 'admin',
    component: AdmindashboardComponent,
    canActivate: [AdminGuard],
    children: [
      { path: '', component: HomeAdminComponent },
      { path: 'users', component: UsersComponent },
      { path: 'adduser', component: AdduserComponent },
      { path: 'flights', component: AdminflightsComponent },
      { path: 'addflight', component: AddflightComponent },
      { path: 'reports', component: ReportsComponent },
    ],
  },
];
