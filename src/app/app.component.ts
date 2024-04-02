import { Component } from '@angular/core';
import { RouterOutlet, RouterModule,RouterLinkActive } from '@angular/router';
import { HomeComponent } from './components/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule,HomeComponent, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-app';
  
}
