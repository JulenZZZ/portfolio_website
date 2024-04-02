import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";


@Component({
    selector: "app-cars",
    standalone: true,
    templateUrl: "../views/cars.html",
    imports: [RouterModule, RouterModule, RouterOutlet]
    })

export class CarsComponent {
    ngOnInit() {
        console.log("cars.component cargado");
    }
}