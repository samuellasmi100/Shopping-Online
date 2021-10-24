import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/Product';

@Pipe({
  name: 'productsCategory'
})
export class ProductsCategoryPipe implements PipeTransform {

  transform(products:Product[], categoryId: number): any {
    return products.filter((product:Product) => {
       if(!categoryId){
         return products
       }
      return product.categoryId === +categoryId
  
 
    });
  
  }
}
