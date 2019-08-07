import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilmComponent } from './list-film.component';
import { ListFilmRoutingModule } from './list-film-routing';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [ListFilmComponent],
  exports: [ListFilmComponent],
  imports: [
    NgxPaginationModule,
    ListFilmRoutingModule,
    CommonModule
  ]
})
export class ListFilmModule { }
