import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChitietphimComponent } from './chitietphim.component';
import { ChitietphimRoutingModule } from './chitietphim-routing.module';
import { AdsAndInforModule } from '../list-film/ads-and-infor/ads-and-infor.module';
import { CinemaComponent } from './cinema/cinema.component';


@NgModule({
  declarations: [ChitietphimComponent, CinemaComponent],
  exports: [ChitietphimComponent],
  imports: [
    AdsAndInforModule,
    ChitietphimRoutingModule,
    CommonModule
  ]
})
export class ChitietphimModule { }
