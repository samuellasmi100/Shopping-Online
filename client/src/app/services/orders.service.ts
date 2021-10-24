import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/Order';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public lastOrder: any[] = [];
  public orderComplete:boolean = false;
  
  constructor(private http:HttpClient) { }

  sendOrder(orderDetails:Order):Observable<Order>{
    return this.http.post<Order>("http://localhost:5001/orders",{orderDetails})
  }

  getInvalidDates():Observable<string[]>{
   return this.http.get<string[]>("http://localhost:5001/orders/invalid-date")
  }

  getlastOrderOfCustomer():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:5001/orders")
   }

  getCountOfAllOrders():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:5001/orders/allorders")
  }
}
