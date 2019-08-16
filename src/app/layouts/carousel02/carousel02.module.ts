import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Carousel02Component } from './carousel02.component';
import { Carousel02ItemComponent } from './carousel02-item/carousel02-item.component';

@NgModule({
  declarations: [Carousel02Component, Carousel02ItemComponent, ],
  exports: [Carousel02Component],
  imports: [
    CommonModule,
  ]
})
export class Carousel02Module { }
