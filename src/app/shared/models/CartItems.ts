import { Food1 } from "./food1";

export class CartItem{
    constructor(food:Food1){
      this.food=food;
    }
    food:Food1;
    quantity:number=1;
    
    get price():number{
        return this.food.price * this.quantity;
    }
}