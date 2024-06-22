import { Component, Input } from '@angular/core';
import { Rating } from '../rating';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss',
})
export class StarComponent {
  @Input() rate!: number;
  get stars() {
    return Array(5)
      .fill(false)
      .map((_, index) => index < this.rate);
  }
}
