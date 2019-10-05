import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatveComponent } from './datve.component';
import { DatveRoutingModule } from './datve-routing.module';
import { ChongheComponent } from './chonghe/chonghe.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';
import { DatgheComponent } from './datghe/datghe.component';
import { NgPaymentCardModule } from 'ng-payment-card';

@NgModule({
  declarations: [DatveComponent, ChongheComponent, ItemGheComponent, DatgheComponent],
  exports: [DatveComponent],
  imports: [
    NgPaymentCardModule, 
    DatveRoutingModule,
    CommonModule
  ]
})
export class DatveModule { }
