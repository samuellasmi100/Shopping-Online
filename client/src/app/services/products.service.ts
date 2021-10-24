
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:Product[] = [];
  productAmount: number;

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:5001/products")
  }
   
  updateProducts(productId:any,product:FormData):Observable<any> {
    return this.http.put<any>(`http://localhost:5001/products/${productId}`,product)
  }

  addProduct(product:FormData):Observable<any>{
    return this.http.post<any>("http://localhost:5001/products",product)
  }
}
