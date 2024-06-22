import { Component, Input, OnInit } from '@angular/core';
import { Rating } from '../rating';

@Component({
  selector: 'app-average-ratings-list',
  templateUrl: './average-ratings-list.component.html',
  styleUrl: './average-ratings-list.component.scss',
})
export class AverageRatingsListComponent implements OnInit {
  @Input() ratings!: Rating[];
  averageRating!: number;
  ngOnInit(): void {
    this.getAverage();
  }
  getAverage() {
    const ratingSum = this.ratings.reduce(
      (cur, rating) => cur + rating.rate,
      0
    );
    this.averageRating = Math.ceil(ratingSum / 5);
  }
}
