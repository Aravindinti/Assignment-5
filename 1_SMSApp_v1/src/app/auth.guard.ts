import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserserviceService } from './service/userservice.service';

export const authGuard: CanActivateFn = (route, state) => {
const service =inject(UserserviceService)
  const r=inject(Router)
  console.log(service.isUserLoggedIn+'in auth guard service')
  if(service.isUserLoggedIn){    
   return true;
}
  else
  {
    r.navigate(['login'])
    return false;
  }
 
};
