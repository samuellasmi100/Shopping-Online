import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,} from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuard implements CanActivate {
  constructor(private userService:UserService,private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      if(this.userService.isLoggdIn() && this.userService.userType == 0){
        return true;
      } else {
        this.router.navigate(["/home"])
        alert("You Need To Sign In First")
        return false
      }
  }
  
  
}
