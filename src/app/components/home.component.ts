import { Component } from "@angular/core";
import { RouterModule,RouterOutlet } from "@angular/router";


@Component({
    selector: "app-projects",
    standalone: true,
    templateUrl: "../views/home.html",
    styleUrls: ["../styles/app.component.scss"],
    imports: [RouterModule, RouterOutlet]
    })

export class HomeComponent {
    ngOnInit() {
        console.log("project.component cargado");
    }
}