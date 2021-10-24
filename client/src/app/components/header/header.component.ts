import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from 'src/app/services/orders.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public removeDuplicate:any[] = [];

  public totalItem : number = 0;

  constructor(public userService: UserService,public cartService:CartService,public ordersService:OrdersService) { }

  ngOnInit(): void {

    this.cartService.getProducts()

    .subscribe(res=>{
        // remove duplicate product from cart
        this.removeDuplicate = Array.from(new Set(res.map((a:any) => a.productId))).map((id:any) => {
          
          return res.find((a:any) => a.productId === id )
        })
        this.totalItem = this.removeDuplicate.length;
      })
  }
}
