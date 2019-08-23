import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousel03Component } from './carousel03.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [Carousel03Component],
  exports: [Carousel03Component],
  imports: [
    CommonModule, SlickCarouselModule
  ]
})
export class Carousel03Module { }
