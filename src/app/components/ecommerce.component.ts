import { Component } from "@angular/core";

@Component({
    selector: "app-ecommerce",
    standalone: true,
    templateUrl: "../views/ecommerce.html"
    })

    export class EcommerceComponent {
        ngOnInit() {
            console.log("home.component cargado");
        }
    }