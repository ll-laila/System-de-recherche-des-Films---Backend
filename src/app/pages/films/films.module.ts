import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsComponent } from './films.component';
import { FilmsPageRoutingModule } from './films.routing.module';

import { SwiperModule } from 'swiper/angular';
import { LoaderModule } from 'src/app/components/loader/loader.module';

@NgModule({
  declarations: [
    FilmsComponent,
  ],
  imports: [
    CommonModule,
    FilmsPageRoutingModule,
    SwiperModule,
    LoaderModule
  ]
})

export class FilmsModule { }
