import { Injectable } from '@angular/core';
import { Food1 } from '../../shared/models/food1';
import { Tag } from '../../shared/models/tags';

@Injectable({ providedIn: 'root' })
export class FoodService {
  getAll(): Food1[] {
    return [
      { id: 1, name: 'Dosa', cookTime: '10-20mins', price: 150, favourite: false, origins: ['TamilNadu'], stars: 4, imageUrl: 'assets/images/food/food1.jpeg', tags: ['BreakFast', 'Lunch'] },
      { id: 2, name: 'Idly', cookTime: '60mins', price: 160, favourite: true, origins: ['TamilNadu'], stars: 5, imageUrl: 'assets/images/food/food2.jpeg', tags: ['BreakFast', 'Brunch'] },
      { id: 3, name: 'Bisibele Bath', cookTime: '50mins', price: 350, favourite: false, origins: ['Karnataka'], stars: 3, imageUrl: 'assets/images/food/food3.jpeg', tags: ['BreakFast', 'Brunch', 'Lunch'] },
      { id: 4, name: 'Obattu', cookTime: '90mins', price: 550, favourite: false, origins: ['Karnataka'], stars: 4, imageUrl: 'assets/images/food/food4.jpeg', tags: ['Dinner', 'Lunch'] },
      { id: 5, name: 'Biryani', cookTime: '120mins', price: 450, favourite: true, origins: ['Andhra Pradesh'], stars: 5, imageUrl: 'assets/images/food/food5.jpeg', tags: ['Lunch', 'Dinner'] },
      { id: 6, name: 'Payasam', cookTime: '30mins', price: 250, favourite: true, origins: ['TamilNadu'], stars: 4, imageUrl: 'assets/images/food/food6.jpeg', tags: ['Dessert'] },
      { id: 7, name: 'Vada', cookTime: '45mins', price: 275, favourite: true, origins: ['Karnataka'], stars: 3, imageUrl: 'assets/images/food/food7.jpg', tags: ['Snack'] },
      { id: 8, name: 'Mysore pak', cookTime: '120mins', price: 310, favourite: false, origins: ['Karnataka'], stars: 2, imageUrl: 'assets/images/food/food8.jpg', tags: ['Dessert'] },
      { id: 9, name: 'Kajjaya', cookTime: '150mins', price: 530, favourite: true, origins: ['Karnataka'], stars: 5, imageUrl: 'assets/images/food/food9.jpg', tags: ['Dessert'] },
      { id: 10, name: 'Rasam Rice', cookTime: '15mins', price: 200, favourite: true, origins: ['Karnataka', 'Telangana'], stars: 5, imageUrl: 'assets/images/food/food10.jpg', tags: ['BreakFast', 'Lunch', 'Dinner'] },
      { id: 11, name: 'Medhu Vada', cookTime: '40mins', price: 150, favourite: false, origins: ['Karnataka'], stars: 3, imageUrl: 'assets/images/food/food11.jpg', tags: ['BreakFast', 'Snack'] },
      { id: 12, name: 'Curd Rice', cookTime: '15mins', price: 90, favourite: true, origins: ['Karnataka', 'Kerala'], stars: 4, imageUrl: 'assets/images/food/food12.jpg', tags: ['BreakFast', 'Lunch', 'Dinner'] },
      { id: 13, name: 'Lemon Rice', cookTime: '20mins', price: 150, favourite: false, origins: ['Karnataka'], stars: 2, imageUrl: 'assets/images/food/food13.jpg', tags: ['BreakFast', 'Lunch'] },
      { id: 14, name: 'Chilly Chicken', cookTime: '40mins', price: 350, favourite: true, origins: ['AndhraPradesh'], stars: 5, imageUrl: 'assets/images/food/food14.jpg', tags: ['BreakFast', 'Lunch', 'Dinner'] },
      { id: 15, name: 'Vangi Bath', cookTime: '30mins', price: 140, favourite: false, origins: ['Karnataka'], stars: 3, imageUrl: 'assets/images/food/food15.jpg', tags: ['BreakFast', 'Lunch'] },
      { id: 16, name: 'Happala', cookTime: '5mins', price: 30, favourite: false, origins: ['Karnataka'], stars: 4, imageUrl: 'assets/images/food/food16.jpg', tags: ['Snack'] },
      { id: 17, name: 'Upittu', cookTime: '20mins', price: 100, favourite: true, origins: ['Karnataka'], stars: 5, imageUrl: 'assets/images/food/food17.jpg', tags: ['BreakFast', 'Lunch'] },
      { id: 18, name: 'Fish Curry', cookTime: '50mins', price: 450, favourite: true, origins: ['Kerala'], stars: 4, imageUrl: 'assets/images/food/food18.jpg', tags: ['BreakFast', 'Lunch', 'Dinner'] },
      { id: 19, name: 'Malabar Parata', cookTime: '40mins', price: 350, favourite: false, origins: ['Kerala'], stars: 4, imageUrl: 'assets/images/food/food19.jpg', tags: ['BreakFast', 'Lunch', 'Dinner'] },
      { id: 20, name: 'Puttu & Kadala', cookTime: '150mins', price: 650, favourite: true, origins: ['Kerala'], stars: 5, imageUrl: 'assets/images/food/food20.jpg', tags: ['BreakFast', 'Lunch', 'Dinner'] },
      { id: 21, name: 'Uttapam', cookTime: '30mins', price: 100, favourite: false, origins: ['TamilNadu'], stars: 3, imageUrl: 'assets/images/food/food21.jpg', tags: ['BreakFast', 'Lunch'] },
      { id: 22, name: 'Urulai Roast', cookTime: '30mins', price: 200, favourite: false, origins: ['TamilNadu'], stars: 4, imageUrl: 'assets/images/food/food22.jpg', tags: ['BreakFast', 'Lunch'] },
      { id: 23, name: 'Elaneer Payasa', cookTime: '30mins', price: 250, favourite: true, origins: ['TamilNadu'], stars: 4, imageUrl: 'assets/images/food/food23.jpg', tags: ['Dessert'] },
      { id: 24, name: 'Pulihora', cookTime: '30mins', price: 150, favourite: false, origins: ['Andhra'], stars: 3, imageUrl: 'assets/images/food/food24.jpg', tags: ['BreakFast', 'Lunch'] },
      { id: 25, name: 'Pesarattu', cookTime: '30mins', price: 110, favourite: false, origins: ['Andhra'], stars: 2, imageUrl: 'assets/images/food/food25.jpg', tags: ['BreakFast', 'Lunch'] }
    ];
  }

  getFoodById(id: number): Food1 {
    return this.getAll().find(food => food.id === id)!;
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 25 },
      { name: 'Lunch', count: 17 },
      { name: 'BreakFast', count: 17 },
      { name: 'Dinner', count: 8 },
      { name: 'Dessert', count: 4 },
      { name: 'Snack', count: 3 },
    ];
  }

  getAllFoodsByTag(tag: string): Food1[] {
    return tag === 'All' ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }
}
