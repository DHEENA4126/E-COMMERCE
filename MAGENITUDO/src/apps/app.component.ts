import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import data from './db.json';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'magnitudo';
}
export class NavbarComponent {
  signupdata:any = data;

}
