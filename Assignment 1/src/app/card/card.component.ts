import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() item!: Item;
  @Output() titleColor = new EventEmitter<string>();

  setColor() {
    this.titleColor.emit(this.item.color);
  }
}
