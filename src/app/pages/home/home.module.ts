import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageRoutingModule } from './home.routing.module';

import { HomeComponent } from './home.component';

import { BlocFilmsModule } from 'src/app/components/bloc-films/bloc-films.module';
import { LoaderModule } from 'src/app/components/loader/loader.module';
import { FormsModule } from "@angular/forms";

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    BlocFilmsModule,
    LoaderModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    HomeComponent
  ]
})

export class HomePageModule {}
