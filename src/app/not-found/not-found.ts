
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {CartItem} from '../shared/models/CartItems';


@Component({
  selector: 'app-not-found',
  standalone:true,
  imports: [CommonModule, RouterModule],
  templateUrl: './not-found.html',
  styleUrls: ['./not-found.css']
})
export class NotFound {
  @Input() visible:boolean=false;
  @Input() notFoundMessage:string="Nothing Found";
 @Input() resetLinkText:string="Reset";
  @Input() resetLinkRoute:string="/";
}
