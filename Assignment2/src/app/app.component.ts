import { Component } from '@angular/core';
import { Rating } from './rating';
import { ratings } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Assignment2';
  ratings: Rating[] = ratings;
}
