import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private router: Router,private ordersServices:OrdersService,private cartService:CartService,) { }

  ngOnInit(): void {
    if(this.ordersServices.orderComplete){
      this.cartService.removeAllCart()
      sessionStorage.removeItem('token');
      this.ordersServices.lastOrder = []
      this.router.navigate(["/"])
    } if(!this.ordersServices.orderComplete){
      sessionStorage.removeItem('token');
      this.ordersServices.lastOrder = []
      this.router.navigate(["/"])
    }
    

    
  }

}
