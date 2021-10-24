import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/Product';

@Pipe({
  name: 'productsSubText'
})
export class ProductsSubTextPipe implements PipeTransform {

  transform(products: Product[], subText: string): any {
    return products.filter((product:Product) => {
      return product.productName!.toLowerCase().includes(subText.toLowerCase())
    })
  }
}
