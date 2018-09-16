import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private invalidlogin:boolean = false;
  constructor(private router:Router,private service:AuthService,private route:ActivatedRoute) { }

  ngOnInit() {
  }
  signIn(credentials){
    let returnvalue = this.service.login(credentials);
    if(returnvalue.token){
      let returnurl = this.route.snapshot.queryParamMap.get('returnUrl');
      console.log(returnurl);
      this.router.navigate([returnurl || '/']);
    } 
    else{
        this.invalidlogin = true;
    }
  } 

}
