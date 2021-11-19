import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchAll, switchMap, tap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss'],
})
export class UsersDetailComponent implements OnInit, OnDestroy {
  user: any;
  private subscription: Subscription[] = [];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription.push(
      this.route.params
        .pipe(
          tap((data) => console.log(data)),
          switchMap((data) => this.userService.getUserById(data.id))
        )
        .subscribe((user: any) => {
          console.log(user);
          this.user = user;
        })
    );
  }
  ngOnDestroy() {
    this.subscription.forEach((data) => data.unsubscribe());
  }
}
