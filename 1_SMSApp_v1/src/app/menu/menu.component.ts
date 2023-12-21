import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserserviceService } from '../service/userservice.service';
import {MatSidenavModule} from '@angular/material/sidenav'
import HeaderComponent from '../header/header.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,RouterModule,MatSidenavModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(public service:UserserviceService)
  {

  }
 


}
