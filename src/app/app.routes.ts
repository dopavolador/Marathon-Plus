import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RacesComponent } from './races/races.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ResultComponent } from './result/result.component';
import { SignupComponent } from './signup/signup.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
    {
        path:'',component: HomeComponent
    },
    {
        path:'carreras',component: RacesComponent
    },
    {
        path:'login',component: LoginComponent
    },
    {
        path:'contact',component: ContactComponent
    },
    {
        path:'result',component: ResultComponent
    },
    {
        path:'signup',component: SignupComponent
    },
    {
        path:'recovery',component: RecoveryComponent
    },
    {
        path:'register',component: RegisterComponent
    }
    
];