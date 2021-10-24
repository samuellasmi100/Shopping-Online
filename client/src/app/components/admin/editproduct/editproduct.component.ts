import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { UpdatingProductDetails } from 'src/app/model/UpdatingProductDetails';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
 
  public id:any;
  public product:any = {}
  public formData: FormData = new FormData();
  public file!: File;

  constructor(private route:ActivatedRoute,private productServices:ProductsService,private router:Router) { }

  ngOnInit() {

    this.id = +this.route.snapshot.paramMap.get('id')!;

    const findProductToUpdate = this.productServices.products.find((product:Product) => {

      return product.productId === this.id
    });
    this.product = findProductToUpdate!;
  }

  selectImage(e: any) {
    this.file = e.target.files[0];
  }
  
  update(){

    this.formData.append("image",this.file,this.file.name)
    this.formData.append("productName",this.product.productName);
    this.formData.append("price",this.product.price.toString());

    const updateProducObservabel = this.productServices.updateProducts(this.id,this.formData);

    updateProducObservabel.subscribe(res => {

     console.log(res)

     this.router.navigate(["/products"])

    },err => {
      alert(err.error.error) 
    })
  }
}
