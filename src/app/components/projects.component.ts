import { Component } from "@angular/core";
import { RouterModule,RouterOutlet } from "@angular/router";


@Component({
    selector: "app-projects",
    standalone: true,
    templateUrl: "../views/projects.html",
    imports: [RouterModule, RouterOutlet]
    })

export class ProjectsComponent {
    
}