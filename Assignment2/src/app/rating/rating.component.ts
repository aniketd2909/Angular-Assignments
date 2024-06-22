import { Component, Input } from '@angular/core';
import { Rating } from '../rating';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
})
export class RatingComponent {
  @Input('name') name!: string;
  @Input('content') content!: string;
  @Input('rate') rate!: number;
}
