import { Aboutus } from './aboutus/aboutus';
import { BookEvent } from './book-event/book-event';
import { Creatacc } from './creatacc/creatacc';
import { LoginPage } from './login-page/login-page';
import { Movielist } from './movielist/movielist';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"Login",
        component:LoginPage,
    },
    {
        path:"",
        component:LoginPage
    },
    {
        path:"Booking",
        component:BookEvent
    },
    {
        path:"Createacc",
        component:Creatacc
    },
    {
        path:"list",
        component:Movielist
    },
    {
        path:"abtus",
        component:Aboutus
    }
    
];
