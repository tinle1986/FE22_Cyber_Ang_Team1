import { NgModule } from '@angular/core';
import { StarRatingModule } from 'angular-star-rating';
import { CommonModule } from '@angular/common';

import { Carousel02Component } from './carousel02.component';
import { Carousel02ItemComponent } from './carousel02-item/carousel02-item.component';
import { Carousel02SlideComponent } from './carousel02-slide/carousel02-slide.component';

@NgModule({
  declarations: [Carousel02Component, Carousel02ItemComponent, Carousel02SlideComponent,],
  exports: [Carousel02Component],
  imports: [
    CommonModule, StarRatingModule.forRoot()
  ]
})
export class Carousel02Module { }
