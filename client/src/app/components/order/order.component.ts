import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/Order';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from 'src/app/services/orders.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
   
  public productsOrder:Order = new Order()
  public products:Product[] = []
  public searchInput:string = "";
  public isDateError:string = "";
  public invalidDates:string[] = [];

  constructor(
    private userServices:UserService,
    private cartServices:CartService,
    private orderServices:OrdersService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.getProductInCart()
    this.getAllDates()
  }
  getProductInCart(){
    const ordrrProductObservable = this.cartServices.getProducts();
    ordrrProductObservable.subscribe(res => {
      this.products = res
    },err => {
      alert(err.error.error) 
    })
  }
  getAllDates(){
    const invalidDateObservabele = this.orderServices.getInvalidDates();
    invalidDateObservabele.subscribe(res => {
      
      this.invalidDates = res
     
    },err => {
      alert(err.error.error) 
    })
  }
  //fill the city street
  getCorrentUserStreet(){
    this.productsOrder.street = this.userServices.currentUser.street
  }
  //fill the city input
  getCorrentUserCity(){
    console.log(this.userServices.currentUser.city)
    this.productsOrder.city = this.userServices.currentUser.city
  }
  //get string of search input
  searchText(event:any){
    this.searchInput = event
  }
 //get the city
  onSelectChange(event:any){
    this.productsOrder.city = event.target.value
  }
  
  //complete order
  sendOrder(){
    const orderObservabel = this.orderServices.sendOrder(this.productsOrder)

    orderObservabel.subscribe(res => {

      this.orderServices.orderComplete = true

      this.router.navigate(["/reception"])
  
    },err => {
      alert(err.error.error) 
    })
  }
  
  stringToDate(dateString: string) {
    const year = +dateString.split("-")[0]
    const month = +dateString.split("-")[1]-1
    const day = +dateString.split("-")[2]
    return new Date(year, month, day);
  }
  //checking f date is validate
  handleDateChange(e: any){
    const dateString = this.stringToDate(e.target.value);
    const now = this.stringToDate(new Date().toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }))
    if (this.invalidDates.includes(e.target.value) || dateString < now) {
      this.isDateError = dateString < now ? "Date has already passed.": "Too many deliveries on that date."
      e.target.classList = "invalid-date"
    } else {
      this.isDateError = "";
      e.target.classList = "valid-date"
    }
  }

}
