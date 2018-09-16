import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import  { JwtHelperService,JwtModule } from '@auth0/angular-jwt';

import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.dyt0CoTl4WoVjAHI9Q_CwSKhl6d_9rhM3NrXuJttkao';
  constructor(private router:Router) { }

  login(credentials){
    if(credentials.email=='ankush@gmail.com' && credentials.password=='1234'){
      localStorage.setItem('token',this.token);
      return {status:200,token:this.token};
    }
    else{
      return {status:401};
    }
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);


  }
  isLoggedIn(){
    let jwthelper = new JwtHelperService();
     let token = localStorage.getItem('token');
     console.log(token);
     return jwthelper.isTokenExpired(token);
     /* if(!token)
        return false;
     let expirationDate = jwthelper.getTokenExpirationDate(token);
     let isExpired  = jwthelper.isTokenExpired(token);
     //console.log('Expiration',expirationDate);
     //console.log('isExpired',isExpired); 
    return !isExpired; */
  }
  get CurrentUserrole(){
    let token = localStorage.getItem('token');
    if(!token){
      return null;
    }
    //console.log(new JwtHelperService().decodeToken(token).admin);
    return new JwtHelperService().decodeToken(token);
  }
}
