import { Routes } from '@angular/router';
import { Student } from '../model/Student';
import { StudentsComponent } from './students/students.component';
import { LoginComponent } from './login/login.component';
import HeaderComponent from './header/header.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SortComponent } from './sort/sort.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path:'students',
        component:StudentsComponent,
            canActivate:[authGuard]
      
    },
    {
        path:'login',
        component:LoginComponent
    },
{
    path:'header',
    component:HeaderComponent
},
{
    path:'contactus',
    component:ContactusComponent
},
{
    path:'sort',
    component:SortComponent
},
{
    path:'logout',
    component:LogoutComponent
},
{
    path:'register',
    component:RegisterComponent
},
{
    path:'aboutus',
    component:AboutusComponent
}


];
