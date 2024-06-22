import { Component, Input } from '@angular/core';
import { Rating } from '../rating';
@Component({
  selector: 'app-ratings-list',
  templateUrl: './ratings-list.component.html',
  styleUrl: './ratings-list.component.scss',
})
export class RatingsListComponent {
  @Input() ratings!: Rating[];
}
