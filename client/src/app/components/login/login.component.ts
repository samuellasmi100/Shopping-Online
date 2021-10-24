import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginDetails } from 'src/app/model/UserLoginDetails';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userLoginDetails:UserLoginDetails;

  public error = "";

  constructor(private userServic :UserService,private router:Router) { 
    
    this.userLoginDetails = new UserLoginDetails()
  }

  login(){
    
    const loginObservable = this.userServic.login(this.userLoginDetails);

    loginObservable.subscribe(res => {

      this.userServic.currentUser = res.userInfo
       
      sessionStorage.setItem("token",'Bearer ' + res.token);

      this.userServic.userType = res.admin

      if(res.admin === 0){

        this.router.navigate(["/customer"])

      }else if (res.admin === 1){

        this.router.navigate(["/admin/products"])
      }
    },err => {this.error = err.error.error})
  }
  ngOnInit(): void {}

}
