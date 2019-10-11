import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieZoneComponent } from './movie-zone.component';



@NgModule({
  declarations: [MovieZoneComponent],
  exports: [MovieZoneComponent],
  imports: [
    CommonModule
  ]
})
export class MovieZoneModule { }
