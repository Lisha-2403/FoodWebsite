import { Component, Input, OnInit } from '@angular/core';
import {Tag} from '../shared/models/tags';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  imports: [CommonModule, RouterLink],
  standalone:true,
  templateUrl: './tags.html',
  styleUrls: ['./tags.css']
})
export class TagsComponent implements OnInit {
  @Input()
   foodPageTags?:string[];
   @Input()
   justifyContent:string="center";

   tags:Tag[]=[];

   constructor(private foodService:FoodService) { }
ngOnInit (): void {
  this.tags=this.foodService.getAllTags();
}}
