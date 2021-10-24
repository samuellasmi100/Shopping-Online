import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationDetails } from 'src/app/model/UserRegistrationDetails';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public userRegistrationDetails:UserRegistrationDetails = new UserRegistrationDetails();

  public completeRegister:boolean = false;
  
  public error:string ="";

  constructor(private userService:UserService,private router:Router) { }
  
  //first step of registration
  validate(event:any){

    event.preventDefault();
    // check if password is match
    if(this.userRegistrationDetails.password !== this.userRegistrationDetails.password1){

      this.error = 'Password Do Not Match'

    }else{
     const registerObservable = this.userService.validateRegistration(this.userRegistrationDetails);

      registerObservable.subscribe(res => {

        if(res === true){

          this.completeRegister = true
          this.error = "";
       } 

        else{

            this.error = res.errorType
            }

      },(err) => {
        this.error = err.error.error 
      })
    }
  }

  //secend step of registration
  register(){
    const registerObservable = this.userService.register(this.userRegistrationDetails);

    registerObservable.subscribe(res => {

      this.router.navigate(["/login"])

    },err =>{this.error = err.error.error })
  }
  ngOnInit(): void {}

}
