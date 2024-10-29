import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RacesComponent } from './races/races.component';


export const routes: Routes = [
    {
        path:'',component: HomeComponent
    },
    {
        path:'carreras',component: RacesComponent
    }
];