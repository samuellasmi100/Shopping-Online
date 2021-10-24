import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorys } from 'src/app/model/Categorys';
import { Product } from 'src/app/model/Product';
import { CategorysService } from 'src/app/services/categorys.service';
import { ProductsService } from 'src/app/services/products.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  public newProduct: any = { price: 1, productName: "", image: "", categoryId: 0 }
  public categorys: Categorys[] = [];
  public formData: FormData = new FormData();
  public file!: File;

  constructor(
    private categorysService: CategorysService,
    private productsService: ProductsService,
    private router: Router) {
  }

  onSelectChange(event: any) {
    this.newProduct.categoryId = +event.target.value
  }

  selectImage(e: any) {
    this.file = e.target.files[0];
  }

  addNewProduct() {

    this.formData.append("image",this.file,this.file.name)
    this.formData.append("productName",this.newProduct.productName);
    this.formData.append("categoryId",this.newProduct.categoryId.toString());
    this.formData.append("price",this.newProduct.price.toString());

    const addNewProductObservabel = this.productsService.addProduct(this.formData);
   
    addNewProductObservabel.subscribe(res => {

      this.router.navigate(["/admin/products"])

    }, err => { 
      alert(err.error.error) 
     })

  }

  ngOnInit(): void {

    const categorysObservable = this.categorysService.getAllCategorys();

    categorysObservable.subscribe(res => {

      this.categorysService.categorys = res
      this.categorys = res
    }, err => { 
      alert(err.error.error) 
    })
  }


}
