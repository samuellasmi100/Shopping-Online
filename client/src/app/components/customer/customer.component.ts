import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private cartService:CartService,private ordersService:OrdersService) { }

  ngOnInit(): void {
   //checking status of user
    const userObservable = this.cartService.checkUserCart();

    userObservable.subscribe(res => {
      //if server return null so this is a new user
      if (res == null) {
        
        this.cartService.newUser = true
        this.cartService.statusCart = 0

        this.createCart()

      } if(res){
     // if nthe server return status cart and is 1 so its vetern user with open cart and we bring is product 
        if (res.statusCart === 1){
         
          this.getUserCartItem()

          this.cartService.cartId = res.cartId;

          this.cartService.statusCart = 1
     // if nthe server return status cart and is 0 so its vetern user with close cart
     // and we creat for him new cart and show information about older order of him
        }if(res.statusCart === 0){
           
          this.createCart()
       
          this.cartService.statusCart = 2
          
          this.getlastOrderOfCustomer()

        }

      }
      
    }),(err:any) => {
      alert(err.error.error)
    }
  }

  createCart(){

    const cartObservable = this.cartService.createCart()

    cartObservable.subscribe(res => {
     
      this.cartService.cartId = res.insertId;

      this.cartService.newUser = true    

    },(err) => {

      alert(err.error.error)
      
    })
  }

  getUserCartItem():any{

     const cartItemObservable = this.cartService.getUserCartItem();

     cartItemObservable.subscribe(res => {
        
       this.cartService.setProduct(res)
       
     },err => {
      alert(err.error.error)
      })
  }

  getlastOrderOfCustomer(){
    const getlastOrderObservabele = this.ordersService.getlastOrderOfCustomer();

    getlastOrderObservabele.subscribe(res => {
      

      this.ordersService.lastOrder = res
    
    },(err) => {
      alert(err.error.error) 
    })
  };
  
}
