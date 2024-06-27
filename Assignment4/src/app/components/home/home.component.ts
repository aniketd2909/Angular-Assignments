import { Component, OnInit } from '@angular/core';
import { Init } from 'v8';
import { DataService } from '../../data.service';
import { FormControl } from '@angular/forms';
import { Book } from '../../book';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  startWith,
} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  books$!: Observable<Book[]>;
  bookSearch = new FormControl('');
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.books$ = this.dataService.books$;
    this.bookSearch.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), startWith(''))
      .subscribe((val: any) => {
        if (val === '') {
          this.dataService.books$.next([]);
        } else {
          this.dataService.getBooks(val);
        }
      });
  }
}
