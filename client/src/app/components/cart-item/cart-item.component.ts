import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product!:Product

  constructor(public cartService : CartService) { }

  ngOnInit(): void {
    
  }

  removeItem(product:any){
    const removeProduceObservable = this.cartService.removeProductFromCart(product.productId)
    removeProduceObservable.subscribe(res => {
         this.cartService.removeCartItem(product);
    },(err) => {
      alert(err.error.error)  
    })
  };
}
