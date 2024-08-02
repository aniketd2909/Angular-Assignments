import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../service/Result';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrl: './directory.component.css',
})
export class DirectoryComponent implements OnInit {
  users$!: Observable<User[]>;
  sb = new Subscription();
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.sb = this.userService.getUsers().subscribe();
    this.users$ = this.userService.userlist$;
  }

  ngOnDestroy() {
    this.sb.unsubscribe();
  }
}
