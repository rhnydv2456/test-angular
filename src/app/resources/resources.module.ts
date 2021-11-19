import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesDetailComponent } from './resources-detail/resources-detail.component';
import { ResourcesListComponent } from './resources-list/resources-list.component';



@NgModule({
  declarations: [
    ResourcesDetailComponent,
    ResourcesListComponent
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule
  ]
})
export class ResourcesModule { }
