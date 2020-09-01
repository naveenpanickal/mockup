import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/data/data.json';
import { ReviewRatingsComponent } from 'src/app/header/review-ratings/review-ratings.component';
@Component({
  selector: 'app-feature-rating',
  templateUrl: './feature-rating.component.html',
  styleUrls: ['./feature-rating.component.scss'],
})
export class FeatureRatingComponent implements OnInit {
  private ratings = data.feature_rating;
  placeRating = this.ratings.place;
  foodRating = this.ratings.food;
  serviceRating = this.ratings.service;
  staffRating = this.ratings.staff;
  breakfastRating = this.ratings.breakfast;
  constructor() {}

  ngOnInit() {}
}
