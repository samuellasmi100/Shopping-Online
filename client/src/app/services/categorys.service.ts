import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorys } from '../model/Categorys';

@Injectable({
  providedIn: 'root'
})
export class CategorysService {
  public categorys: Categorys[] = [];

  constructor(private http:HttpClient) { }

  getAllCategorys():Observable<Categorys[]>{
    return this.http.get<Categorys[]>("http://localhost:5001/categorys")
  }
}
