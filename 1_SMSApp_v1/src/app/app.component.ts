import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import  HeaderComponent from './header/header.component';
import { StudentsComponent } from './students/students.component';
import { LoginComponent } from './login/login.component';
import { SortComponent } from './sort/sort.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MenuComponent } from './menu/menu.component';
import { LogoutComponent } from './logout/logout.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatSidenavModule,CommonModule, RouterOutlet,FooterComponent,HeaderComponent,StudentsComponent,LoginComponent,SortComponent,RegisterComponent,ContactusComponent,AboutusComponent,MenuComponent,LogoutComponent,MatToolbarModule,MatIconModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloworld';
}
