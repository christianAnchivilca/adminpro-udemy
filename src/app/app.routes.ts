import {Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';

const routes:Routes = [
  
    {path:'login',component:LoginComponent},
    
    {path:'register',component:RegisterComponent},

   
    //{path:'**',pathMatch:'full',redirectTo:'/dashboard'},
    {path:'**',component:NopagefoundComponent}
];


export const APP_ROUTING = RouterModule.forRoot(routes,{useHash:true});