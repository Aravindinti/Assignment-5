import { Component } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
@Component({
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css'],
    selector:'app-header',
    standalone: true
})
 class HeaderComponent{
    message:string="Student Management App";
    SayHello(){
        return "WelcomeBack";
    }




}
export default HeaderComponent