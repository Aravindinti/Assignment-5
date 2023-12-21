import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserserviceService } from '../service/userservice.service';
import { Route, Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'

import { MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,MatFormFieldModule,MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'

})
export class LoginComponent {
message:string='';
password:string='';
username:string='';
constructor(private service:UserserviceService,private r:Router){
}
perform_login(){
 this.service.perform_loginn(this.username,this.password).subscribe(
    res=>{ if(this.username==res[0].name && this.password==res[0].password )
      {
        this.service.isUserLoggedIn=true;
        this.message='Login Successful'
        this.r.navigate(['students'])
      }
      else
      {
        this.message = 'Login Failed'
      }
    }
  )
    
}
}
