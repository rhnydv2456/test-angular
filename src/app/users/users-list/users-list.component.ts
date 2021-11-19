import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit, OnDestroy {
  users: any;
  subscription: Subscription[] = [];
  constructor(private usersService: UserService) {}

  ngOnInit(): void {
    this.subscription.push(
      this.usersService.getUsers().subscribe((users) => {
        this.users = users;
      })
    );
  }
  ngOnDestroy() {
    this.subscription.forEach((data) => data.unsubscribe());
  }
}
