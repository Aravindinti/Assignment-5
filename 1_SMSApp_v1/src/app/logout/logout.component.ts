import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private r:Router,public service:UserserviceService){
      this.perform_logout();
  }

  perform_logout()
  {
   this.service.isUserLoggedIn=false
  this.service.logout();
    this.r.navigate(['login'])
  }

}
