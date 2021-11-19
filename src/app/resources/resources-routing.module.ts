import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesDetailComponent } from './resources-detail/resources-detail.component';
import { ResourcesListComponent } from './resources-list/resources-list.component';

const routes: Routes = [
  {
    path: '',
    component: ResourcesListComponent,
  },
  {
    path: ':id',
    component: ResourcesDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourcesRoutingModule {}
