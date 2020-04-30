import {Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

const routes:Routes = [
    {
        path:'',
        component:PagesComponent,
        children:[
            
            {path:'dashboard',component:DashboardComponent},
            {path:'progress',component:ProgressComponent},
            {path:'graficas1',component:Graficas1Component}
            
        ]
    },
    {path:'login',component:LoginComponent},
    
    {path:'register',component:RegisterComponent},

   
    //{path:'**',pathMatch:'full',redirectTo:'/dashboard'},
    {path:'**',component:NopagefoundComponent}
];


export const APP_ROUTING = RouterModule.forRoot(routes,{useHash:true});