import { Component } from "@angular/core";

@Component({
    selector: "app-ortopedia",
    standalone: true,
    templateUrl: "../views/ortopedia.html"
    })

export class OrtopediaComponent {
    ngOnInit() {
        console.log("ortopedia.component cargado");
    }
}