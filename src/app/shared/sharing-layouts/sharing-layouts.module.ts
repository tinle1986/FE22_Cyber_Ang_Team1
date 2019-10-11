import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './../../layouts/header/header.component';
import { FooterComponent } from './../../layouts/footer/footer.component';
import { Carousel01Module } from 'src/app/layouts/carousel01/carousel01.module';
import { Carousel02Module } from 'src/app/layouts/carousel02/carousel02.module';
// import { Carousel03Module } from "src/app/layouts/carousel03/carousel03.module";
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from 'src/app/entities/home/home-page/home-page.component';
import { SignUpPageComponent } from 'src/app/common/components/sign-up-page/sign-up-page.component';
import { MovieZoneModule } from 'src/app/layouts/movie-zone/movie-zone.module';
import { NowPlayingModule } from 'src/app/layouts/now-playing/now-playing.module';
import { EventAndBlogModule } from 'src/app/layouts/event-and-blog/event-and-blog.module';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    SignUpPageComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    // Carousel01Component,
    // Carousel02Component,
    // Carousel03Component
  ],
  imports: [
    CommonModule,
    Carousel01Module,
    Carousel02Module,
    // Carousel03Module,
    MovieZoneModule,
    NowPlayingModule,
    EventAndBlogModule,
    FormsModule,
    // HeaderModule,
    RouterModule
  ]
})
export class SharingLayoutsModule {}
