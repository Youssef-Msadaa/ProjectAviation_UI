import { Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EmailVerificationComponentComponent } from './email-verification-component/email-verification-component.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
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
  {
    path: 'verify/:uniqueString',
    component: EmailVerificationComponentComponent,
  },
];
