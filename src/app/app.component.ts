import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ProjectsComponent } from './components/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule,ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-app';
  
}
