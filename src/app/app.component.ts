import { Component } from '@angular/core';
import { RouterOutlet, RouterModule,RouterLinkActive } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { injectSpeedInsights } from '@vercel/speed-insights';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule,HomeComponent, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './styles/app.component.scss'
})
export class AppComponent {
  title = 'portfolio-app';
  
}
