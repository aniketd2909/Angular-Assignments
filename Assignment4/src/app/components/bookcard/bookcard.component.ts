import { Component, Input } from '@angular/core';
import { Book } from '../../book';

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrl: './bookcard.component.scss',
})
export class BookcardComponent {
  @Input() book!: Book;
}
