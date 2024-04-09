import { Component } from "@angular/core";

@Component({
    selector: "app-portfolio",
    standalone: true,
    templateUrl: "../views/portfolio.html",
    styleUrls: ["../styles/projects.scss"]
    })

export class PortfolioComponent {
    ngOnInit() {
        console.log("portfolio.component cargado");
    }
    }