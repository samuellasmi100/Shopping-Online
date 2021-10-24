import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() product:any;

  public amount:number = 1;

  constructor(private cartService: CartService,public userService:UserService, private router:Router) { }

  ngOnInit(): void {} 
  
  validateCartItem(product:Product){

     product.price = product.price! * this.amount;

    const validateProductObservabel = this.cartService.getOneProduct(product.productId);

    validateProductObservabel.subscribe(res => {
      
        if(res.length >= 1){

          alert("This Product Is Already In Your Account")

          return

        } else if(res.length === 0){

          this.addtocart(product)
        }
    },err => {
      alert(err.error.error) 

    })
  };
 
  addtocart(item: any){
    item.amount = this.amount

        const addProductsObservable = this.cartService.addProductsToCart(item)

        addProductsObservable.subscribe(res => {
          
    
          this.cartService.addtoCart(item)

         },(err) => {
           
           alert(err.error.error) 

        })
      }

    onClick(productId:any){
      this.router.navigate(["admin/edit/" + productId])
    }
   
  
}
