import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FoodService } from '../services/food/food.service';
import { Food1 } from '../shared/models/food1';
import { ActivatedRoute } from '@angular/router';
import { Search } from '../search/search'; 
import { TagsComponent } from '../tags/tags';
import { RouterLink } from '@angular/router'; 
import {NotFound} from '../not-found/not-found';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Search, TagsComponent, RouterLink,NotFound],   // <-- add here
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  foods: Food1[] = [];

  constructor(private foodService: FoodService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const term = params['searchTerm'] ? params['searchTerm'].toLowerCase() : '';
      this.foods = this.foodService.getAll().filter(food => food.name.toLowerCase().includes(term));

      if (params['tag']) {
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      }
    });
  }
}
