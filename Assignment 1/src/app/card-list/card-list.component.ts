import { Component, OnInit } from '@angular/core';
import { Items } from '../data';
import { Item } from '../item';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent implements OnInit {
  items: Item[] = Items;
  titleColor: string = '';
  ngOnInit() {
    this.items[0].isSelected = true;
    this.titleColor = this.items[0].color;
  }
  setTitleColor($event: string) {
    console.log($event);
    this.titleColor = $event;
    this.items.forEach((item) => {
      if (item.color != $event) {
        item.isSelected = false;
      } else {
        item.isSelected = true;
      }
    });
  }
}
