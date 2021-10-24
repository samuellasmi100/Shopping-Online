import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuccessfulLoginServerResponse } from '../model/SuccessfulLoginServerResponse';
import { UserLoginDetails } from '../model/UserLoginDetails';
import { UserRegistrationDetails } from '../model/UserRegistrationDetails';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userType:any = 0;

  public currentUser:any;
  
  constructor(private http:HttpClient) { }

  login(userLoginDetauls:UserLoginDetails):Observable<SuccessfulLoginServerResponse>{
    return this.http.post<SuccessfulLoginServerResponse>('http://localhost:5001/users/login',userLoginDetauls)
  };

  validateRegistration(userRegistrationDetails:UserRegistrationDetails):Observable<any>{
    return this.http.post<any>('http://localhost:5001/users/validate',userRegistrationDetails) 
  };

  register(userRegistrationDetails:UserRegistrationDetails):Observable<any>{
    return this.http.post<any>('http://localhost:5001/users/register',userRegistrationDetails) 
  }

  isLoggdIn():boolean{
    let token = sessionStorage.getItem("token")
     if(token){
       return true
     }else {
       return false
     }
  }
}
