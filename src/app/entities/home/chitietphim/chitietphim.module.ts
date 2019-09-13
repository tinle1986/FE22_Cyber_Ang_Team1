import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChitietphimComponent } from './chitietphim.component';
import { ChitietphimRoutingModule } from './chitietphim-routing.module';
import { AdsAndInforModule } from '../list-film/ads-and-infor/ads-and-infor.module';
import { CinemaComponent } from './cinema/cinema.component';
import { CinemadaysComponent } from './cinemadays/cinemadays.component';
import { ItemcinemaComponent } from './itemcinema/itemcinema.component';


@NgModule({
  declarations: [ChitietphimComponent, CinemaComponent, CinemadaysComponent, ItemcinemaComponent],
  exports: [ChitietphimComponent],
  imports: [
    AdsAndInforModule,
    ChitietphimRoutingModule,
    CommonModule
  ]
})
export class ChitietphimModule { }
