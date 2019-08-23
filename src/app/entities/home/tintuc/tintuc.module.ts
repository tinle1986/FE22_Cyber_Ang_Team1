import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TintucComponent } from './tintuc.component';
import { TintucRoutingModule } from './tintuc-routing.module';

@NgModule({
  declarations: [TintucComponent],
  imports: [
    TintucRoutingModule,
    CommonModule
  ]
})
export class TintucModule { }
