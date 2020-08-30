import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/data/data.json'

@Component({
  selector: 'app-review-ratings',
  templateUrl: './review-ratings.component.html',
  styleUrls: ['./review-ratings.component.scss']
})
export class ReviewRatingsComponent implements OnInit {

  reviewRatings = data.review_rating.votes;
  finalRating: number;
  weightedRatingSum = 0;
  totalVotes = data.review_rating.total;
  starPercentage = 0;
  starPercRounded = '';
  constructor() { }

  ngOnInit() {
    this.getFinalRating();
  }

  getFinalRating(){
    for (let ratings in this.reviewRatings) {
      this.weightedRatingSum += this.reviewRatings[ratings].rating *this.reviewRatings[ratings].votes;
    }
      this.finalRating = this.weightedRatingSum/ this.totalVotes;
      this.starPercentage = (this.finalRating/5)*100;
      //Rounding
      this.starPercRounded = `${Math.round(this.starPercentage / 10) * 10}%`;
    console.log(this.starPercRounded);
  }

}
