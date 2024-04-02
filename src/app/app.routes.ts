import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OrtopediaComponent } from './components/ortopedia.component';
import { CarsComponent } from './components/cars.component';
import { EcommerceComponent } from './components/ecommerce.component';
import { PortfolioComponent } from './components/portfolio.component';
import { ErrorComponent } from './components/error.component';
import { HomeComponent } from './components/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'ortopedia', component: OrtopediaComponent },
    { path: 'cars', component: CarsComponent },
    { path: 'ecommerce', component:  EcommerceComponent},
    { path: 'portfolio', component:  PortfolioComponent},
    { path: '**', component: ErrorComponent}
];
