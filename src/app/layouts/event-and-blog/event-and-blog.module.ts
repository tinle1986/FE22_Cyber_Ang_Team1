import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventAndBlogComponent } from './event-and-blog.component';



@NgModule({
  declarations: [EventAndBlogComponent],
  exports: [EventAndBlogComponent],
  imports: [
    CommonModule
  ]
})
export class EventAndBlogModule { }
