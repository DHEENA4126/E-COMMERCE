import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,CommonModule,JsonPipe],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
       userSignup:any={
          phone:"",
          otp:"",
          password:"",
          email:"",
          Name:"",
          alterphone:"",
          address1:"",
          address2:"",
          address3:"",

       }
       Sub=false;
       onSubmit(form: NgForm) {
        console.log(form, '---');
       fetch('http://localhost:3000/users',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(form),
       })
       .then(response=>response.json())
       .then(user=>console.log(user))
        
              
        // Access the input value and print it to the console
        // if (!form.value.phone || !form.value.password) {
        //   alert('Please enter your phone and password');
        //   return;
        // }

      //  alert('Signup successful!');
        window.location.href = '/login'; // Corrected usage of window.location.href
      }
      
      // changeHandler() {
      //   // This method is called when there's a change in the input field
      //   console.log('Input field changed');
      // }
    }
 
   

