import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public productAmount:number = 0
  public orderAmount:any[] = []
  constructor(public productServices:ProductsService,public orderServices:OrdersService) { }

  ngOnInit(): void {
    this.getProductAmount();
    this.getOrderAmount()
  }
  getProductAmount(){
    const productsObservable = this.productServices.getAllProducts()

    productsObservable.subscribe(res => {

       this.productAmount = res.length
      
    },(err) => {
      alert(err.error.error)  
    })
    
  }
  getOrderAmount(){
    const ordersAcountObservabel = this.orderServices.getCountOfAllOrders();

    ordersAcountObservabel.subscribe(res => {
        
      this.orderAmount = res[0].count;
    
    },(err) => {
      alert(err.error.error)
    })
  }
}
