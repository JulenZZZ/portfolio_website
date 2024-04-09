import { Component } from "@angular/core";

@Component({
    selector: "app-ortopedia",
    standalone: true,
    templateUrl: "../views/ortopedia.html",
    styleUrls: ["../styles/projects.scss"]
    })

export class OrtopediaComponent {
    ngOnInit() {
        console.log("ortopedia.component cargado");
    }
}