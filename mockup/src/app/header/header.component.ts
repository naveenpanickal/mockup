import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/data/data.json';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  restaurantName = data.name;
  categories = data.category;
  restaurantAddress = data.area + ", "+ data.city;
  constructor() { }

  ngOnInit(){
    console.log(typeof data.review_rating.votes[1].votes);
    console.log(this.categories[1]);
  }

}
