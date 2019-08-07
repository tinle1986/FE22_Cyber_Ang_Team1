import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCarousel01Component } from '../my-carousel01/my-carousel01.component';
import { MyCarousel01SlideComponent } from '../my-carousel01-slide/my-carousel01-slide.component';

@NgModule({
  declarations: [MyCarousel01Component,MyCarousel01SlideComponent],
  exports: [MyCarousel01Component,MyCarousel01SlideComponent],
  imports: [
    CommonModule
  ]
})
export class MyCarousel01Module { }
