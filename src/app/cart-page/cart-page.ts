import { Component } from '@angular/core';
import {Cart} from '../shared/models/Cart';
import {Cart1} from '../services/cart/cart';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CartItem} from '../shared/models/CartItems';
import { RouterLink } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { NotFound } from "../not-found/not-found";


@Component({
  selector: 'app-cart-page',
  standalone:true,
  imports: [CommonModule, FormsModule, RouterLink, NotFound],
  templateUrl: './cart-page.html',
  styleUrls: ['./cart-page.css']
})
export class CartPage {
  cart!:Cart;
  constructor(private cartService:Cart1){
    
    this.setCart()
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }
  setCart(){
    this.cart=this.cartService.getCart();
  }
}
