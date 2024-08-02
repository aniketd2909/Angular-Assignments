import { Component, Input } from '@angular/core';
import { User } from '../../../../service/Result';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.css',
})
export class UserCardComponent {
  @Input('user') user!: User;
}
