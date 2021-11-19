import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-resources-detail',
  templateUrl: './resources-detail.component.html',
  styleUrls: ['./resources-detail.component.scss'],
})
export class ResourcesDetailComponent implements OnInit, OnDestroy {
  resource: any;
  subscription: Subscription[] = [];
  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService
  ) {}

  ngOnInit(): void {
    this.subscription.push(
      this.route.params
        .pipe(
          tap((data) => console.log(data)),
          switchMap((data) => this.resourceService.getResourceById(data.id))
        )
        .subscribe((resource: any) => {
          console.log(resource);
          this.resource = resource;
        })
    );
  }
  ngOnDestroy() {
    this.subscription.forEach((data) => data.unsubscribe());
  }
}
