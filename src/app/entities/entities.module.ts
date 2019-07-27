import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesComponent } from './entities.component';
import { EntitiesRoutingModule } from './entities-routing.module';

@NgModule({
  declarations: [EntitiesComponent],
  exports: [EntitiesComponent],
  imports: [
    EntitiesRoutingModule,
    CommonModule,
  ]
})
export class EntitiesModule { }
