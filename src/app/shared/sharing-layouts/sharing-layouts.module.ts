import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './../../layouts/header/header.component';
import { FooterComponent } from './../../layouts/footer/footer.component';
import { Carousel01Module } from 'src/app/layouts/carousel01/carousel01.module';
import { Carousel01Component } from 'src/app/layouts/carousel01/carousel01.component';
@NgModule({
  declarations: [HeaderComponent,FooterComponent, ],
  exports: [HeaderComponent,FooterComponent,Carousel01Component],
  imports: [
    CommonModule, Carousel01Module
  ]
})
export class SharingLayoutsModule { }
