export class Order {
    constructor(
        public city?:string,
        public street?:string,
        public shippingDate:string = new Date().toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }),
        public creditCard?:number
    ){}
}