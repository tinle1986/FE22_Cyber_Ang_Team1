import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NowPlayingComponent } from './now-playing.component';



@NgModule({
  declarations: [NowPlayingComponent],
  exports: [NowPlayingComponent],
  imports: [
    CommonModule
  ]
})
export class NowPlayingModule { }
