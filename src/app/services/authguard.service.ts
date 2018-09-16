import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class Authguard implements CanActivate {

  constructor(private service:AuthService,private router:Router) { }
  canActivate(route,state:RouterStateSnapshot){
    console.log(this.service.isLoggedIn());
      if(!this.service.isLoggedIn()){
          return true;
      }
      else{
        this.router.navigate(['/login'],{queryParams:{ returnUrl:state.url }});
        return false;
      }

  }
}
