import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatveComponent } from './datve.component';
import { DatveRoutingModule } from './datve-routing.module';
import { ChongheComponent } from './chonghe/chonghe.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';

@NgModule({
  declarations: [DatveComponent, ChongheComponent, ItemGheComponent],
  exports: [DatveComponent],
  imports: [
    DatveRoutingModule,
    CommonModule
  ]
})
export class DatveModule { }
