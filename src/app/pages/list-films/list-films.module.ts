import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListFilmPageRoutingModule } from './list-films.routing.module';

import { ListFilmComponent } from './list-films.component';
import { BlocFilmsModule } from 'src/app/components/bloc-films/bloc-films.module';

@NgModule({
  declarations: [
    ListFilmComponent,
  ],
  imports: [
    CommonModule,
    BlocFilmsModule,
    ListFilmPageRoutingModule
  ]
})

export class ListFilmPageModule {}

