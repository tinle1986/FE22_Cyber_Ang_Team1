import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilmNPComponent } from './list-film-np.component';
import { ListFilmNPRoutingModule } from './list-film-np-routing.module';
import { FilmComponent } from './film/film.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AdsAndInforModule } from '../ads-and-infor/ads-and-infor.module';
@NgModule({
  declarations: [ListFilmNPComponent, FilmComponent,],
  exports: [ListFilmNPComponent],
  imports: [
    AdsAndInforModule,
    NgxPaginationModule,
    ListFilmNPRoutingModule,
    CommonModule
  ]
})
export class ListFilmNPModule { }
