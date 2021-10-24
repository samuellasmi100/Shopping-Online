import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  public products : Product[] = [];
  public grandTotal !: number;
  public statusCart:any = this.cartService.statusCart;
  public removeDuplicate:any[] = [] 
  public lastOrder = this.ordersService.lastOrder
  
  
  constructor(public cartService : CartService,public ordersService:OrdersService) { }
    ngOnInit(): void {
   
      this.cartService.getProducts()
      .subscribe(res=>{
  
        this.removeDuplicate = Array.from(new Set(res.map((a:any) => a.productId))).map((id:any) => {
          return res.find((a:any) => a.productId === id )
        })
        this.products = this.removeDuplicate;
        this.grandTotal = this.cartService.getTotalPrice(this.removeDuplicate);
      })
     
      
    };


  clearCart(){
    const clearCartObservabele = this.cartService.clearCart()

    clearCartObservabele.subscribe(res => {

    this.cartService.removeAllCart();
     
    },(err) => {
      alert(err.error.error) 
    })
  }

}
