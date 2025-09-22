import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Food1 } from '../shared/models/food1';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import{Cart1} from '../services/cart/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-page',
  standalone:true,
  imports:[CommonModule,RouterModule],
  templateUrl: './food-page.html',
  styleUrls: ['./food-page.css']
})
export class FoodPage implements OnInit {
  foods: Food1[] = [];
  food!: Food1;
  isDetailView = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService:Cart1,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.food = this.foodService.getFoodById(+params['id']);
        this.isDetailView = true;
      } else {
        this.foods = this.foodService.getAll();
        this.isDetailView = false;
      }
    });
  }
 addToCart(){
  this.cartService.addToCart(this.food);
  this.router.navigateByUrl('/cart-page');
 }
}
