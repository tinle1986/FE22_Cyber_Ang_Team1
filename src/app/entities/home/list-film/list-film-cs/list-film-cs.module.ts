import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilmCsComponent } from './list-film-cs.component';
import { ListFilmCsRoutingModule } from './list-film-cs-routing.module';
import { FilmComponent } from './film/film.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AdsAndInforModule } from '../ads-and-infor/ads-and-infor.module';
@NgModule({
  declarations: [ListFilmCsComponent, FilmComponent],
  exports: [ListFilmCsComponent],
  imports: [
    AdsAndInforModule,
    NgxPaginationModule,
    ListFilmCsRoutingModule,
    CommonModule
  ]
})
export class ListFilmCsModule { }
