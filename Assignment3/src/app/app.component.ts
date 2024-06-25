import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { us_cities } from './data';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
} from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'Assignment3';

  // Regular Input
  city: string = '';
  selectedCity: string = '';
  filteredCityNames: Array<String> = [];
  readonly cityNames: Array<String> = us_cities;
  onInputChange() {
    if (!this.city.trim()) {
      this.filteredCityNames = [];
      return;
    }

    this.filteredCityNames = this.cityNames.filter((c) => {
      if (
        c
          .replace(/\s+/g, '')
          .toLowerCase()
          .startsWith(this.city.replace(/\s+/g, '').toLowerCase())
      ) {
        return c;
      }
      return;
    });
  }
  onCitySelect($event: any) {
    this.city = $event.target.innerText;
    this.filteredCityNames = [];
  }
  cityTrackBy(index: any, city: any) {
    return city.hex;
  }

  // mat Autocomplete

  myControl = new FormControl('');
  options: string[] = us_cities; // Assuming us_cities is imported or defined elsewhere
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);

    if (filterValue.length === 0) {
      return [];
    }
    const filteredOptions = this.options.filter((option) =>
      this._normalizeValue(option).startsWith(filterValue)
    );

    return filteredOptions;
  }

  private _normalizeValue(value: string): string {
    return value.replace(/\s+/g, '').toLowerCase();
  }
}
