export class NewProduct {
    constructor(
       public price:number =  1,
       public productName?:string,
       public categoryName?:string,
       public categoryId?:number  | undefined,
       public image?:any,
    ) {
        
    }
}