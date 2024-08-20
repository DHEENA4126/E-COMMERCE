import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';



export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'sign-up',component:SignupComponent},
    {path:'dashboard',component:DashboardComponent}, 

];
