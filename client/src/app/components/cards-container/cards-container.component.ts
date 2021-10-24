import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CategorysService } from 'src/app/services/categorys.service';
import { ProductsService } from 'src/app/services/products.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  public searchInput:string = "".toLowerCase();
  public categoryId!:any;

  constructor(
    public productsService: ProductsService,
    public userService:UserService) { }

  ngOnInit(): void {
    const productsObservable = this.productsService.getAllProducts()

    productsObservable.subscribe(res => {

       this.productsService.products = res
       
    },(err) => {
      alert(err.error.error)  
    })
    
  };
  searchText(event:any){
    this.searchInput = event

  }
  
  getCategoryId(categoryId:any){
    this.categoryId = categoryId
  }
}
