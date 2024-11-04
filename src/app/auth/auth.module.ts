import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    LoginComponent,
    RegisterComponent,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
