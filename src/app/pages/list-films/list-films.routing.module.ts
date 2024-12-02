import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListFilmComponent } from './list-films.component';

const routes: Routes = [
  {
    path: '',
    component: ListFilmComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ListFilmPageRoutingModule {}
