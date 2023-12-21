import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  isUserLoggedIn:boolean=false;
  username: string='';
  password: string='';

  readonly BASE_URL = 'http://localhost:8080/api/user'
  
  constructor( private http:HttpClient)  
  {this.isValidSession()
   }

  perform_loginn( username:string,password:string)
{
  return this.http.get<User[]>(this.BASE_URL+"/"+username+"/"+password)
}

public CreateSessionAndStoreValue(username:string,isUserLoggedIn:boolean)
{
  sessionStorage.setItem('isUserLoggedIn',isUserLoggedIn+'')
  sessionStorage.setItem('username',username)
}

public isValidSession()
{
  let isUserLoggedIn=sessionStorage.getItem('username')

  if(isUserLoggedIn=='guest')
  {
    this.isUserLoggedIn=false
  }
  else
  {
    this.isUserLoggedIn=true
  }
}
public logout()
{
  sessionStorage.removeItem('username')
  sessionStorage.removeItem('isUserLoggedIn')
}
}
