import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  public cartItemList : Product[] = [];

  public productList$ = new BehaviorSubject<any>([]);

  public cartId: any;

  public statusCart: any;
   
  public newUser = false

  public finalPrice!:number

  constructor(private http:HttpClient) {}
  
  
  checkUserCart(){
    return this.http.get<any>("http://localhost:5001/cart")
  };
//creat a new cart
  createCart():Observable<any> {

    const today = new Date()

    const createCartDate = today.getFullYear()+'-'+(today.getMonth()+1) +'-'+today.getDate()

    return this.http.post<any>("http://localhost:5001/cart",{createCartDate})
  };

  getUserCartItem():Observable<any>{
  return this.http.get<any>(`http://localhost:5001/cartitem`)
  };
 
  removeProductFromCart(productId:number):Observable<any>{
    return this.http.put<any>(`http://localhost:5001/cartitem`,{productId})
  }

  clearCart():Observable<any>{
    const cartId = this.cartId
    return this.http.delete<any>(`http://localhost:5001/cartitem/${cartId}`)
  }

  addProductsToCart(product:Product):Observable<any>{
    const cartId = this.cartId
    return this.http.post<any>("http://localhost:5001/cartitem",{product,cartId})  
  }

  getProducts(){
    return this.productList$.asObservable();
  };

  getOneProduct(productId:any){
    return this.http.get<any>(`http://localhost:5001/cartitem/${productId}`)
  }

  setProduct(product : Product[]){
    this.cartItemList.push(...product);
    this.productList$.next(product);
  };
  
  addtoCart(product : any){
      this.cartItemList.push(product);
      this.productList$.next(this.cartItemList)
      this.getTotalPrice(this.cartItemList);
  };

  getTotalPrice(products:any): number{
    let grandTotal = 0;
    products.map((product:any)=>{
      grandTotal += product.price;
      this.finalPrice = grandTotal
    })
    return grandTotal;
  };

  removeCartItem(product: Product){
    this.cartItemList.map((item:Product, index:any)=>{
      if(product.productId === item.productId){
        this.cartItemList.splice(index,1);
      }
    })
    // this.cartItemList.filter((a:any) => {return a.productId !== product.productId})
    this.productList$.next(this.cartItemList);
  };

  removeAllCart(){
    this.cartItemList = []
    this.productList$.next(this.cartItemList);
  }
 
}
