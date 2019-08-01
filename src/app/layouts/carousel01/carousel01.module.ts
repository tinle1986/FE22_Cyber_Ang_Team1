import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCarousel01Module } from './my-carousel01/my-carousel01.module';
import { Carousel01Component } from './carousel01.component';

@NgModule({
  declarations: [Carousel01Component],
  exports: [Carousel01Component],
  imports: [
    CommonModule, MyCarousel01Module
  ]
})
export class Carousel01Module { }
