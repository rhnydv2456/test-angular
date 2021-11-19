import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss'],
})
export class ResourcesListComponent implements OnInit, OnDestroy {
  resources: any;
  subscription: Subscription[] = [];
  constructor(private usersService: ResourceService) {}

  ngOnInit(): void {
    this.subscription.push(
      this.usersService.getResources().subscribe((resources) => {
        this.resources = resources;
      })
    );
  }
  ngOnDestroy() {
    this.subscription.forEach((data) => data.unsubscribe());
  }
}
