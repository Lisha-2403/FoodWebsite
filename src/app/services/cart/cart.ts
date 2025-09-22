import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { Food1 } from '../../shared/models/food1';
import {CartItem} from '../../shared/models/CartItems';
@Injectable({
  providedIn: 'root'
})
export class Cart1 {
  private cart:Cart=new Cart();

  addToCart(food:Food1):void{
    let cartItem = this.cart.items.find(item=>item.food.id===food.id);
      if(cartItem){
        this.changeQuantity(food.id,cartItem.quantity+1)
        return;
      }
    this.cart.items.push(new CartItem(food));
  }
  removeFromCart(foodId:number):void{
    this.cart.items=
    this.cart.items.filter(item=>item.food.id!=foodId);
  }
  changeQuantity(foodId:number,quantity:number){
    let cartItem=this.cart.items.find(item=>item.food.id===foodId);
    if(!cartItem) return;
    cartItem.quantity=quantity;
  }
  getCart():Cart{
    return this.cart;
  }
}
