import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userLogin: any = {
    phone: "",
    password: "",
    otp:"",
    
  };
  Sub=false;
  onSubmit(form: NgForm) {
    console.log(form,'---');
    
    
    window.location.href = '/dashboard';
  }
  
}


