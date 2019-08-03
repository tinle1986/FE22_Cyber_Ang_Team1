import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsAndInforComponent } from './ads-and-infor.component';
import { NewsinforComponent } from './newsinfor/newsinfor.component';

@NgModule({
  declarations: [AdsAndInforComponent, NewsinforComponent],
  exports: [AdsAndInforComponent],
  imports: [
    CommonModule
  ]
})
export class AdsAndInforModule { }
