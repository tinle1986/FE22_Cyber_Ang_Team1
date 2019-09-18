import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChitietphimComponent } from './chitietphim.component';
import { ChitietphimRoutingModule } from './chitietphim-routing.module';
import { AdsAndInforModule } from '../list-film/ads-and-infor/ads-and-infor.module';
import { CinemaComponent } from './cinema/cinema.component';
import { CinemadaysComponent } from './cinemadays/cinemadays.component';
import { ItemcinemaComponent } from './itemcinema/itemcinema.component';
import { BarRatingModule } from "ngx-bar-rating";
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [ChitietphimComponent, CinemaComponent, CinemadaysComponent, ItemcinemaComponent],
  exports: [ChitietphimComponent],
  imports: [
    RatingModule,
    AdsAndInforModule,
    ChitietphimRoutingModule,
    CommonModule,
  ]
})
export class ChitietphimModule { }
