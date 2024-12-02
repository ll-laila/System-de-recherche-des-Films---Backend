import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocFilmsComponent } from './bloc-films.component';

import { RouterModule } from '@angular/router';

import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [
    BlocFilmsComponent
  ], 
  imports: [
    CommonModule,
    RouterModule,
    LoaderModule
  ],
  exports: [
    BlocFilmsComponent
  ]
})
export class BlocFilmsModule { }
