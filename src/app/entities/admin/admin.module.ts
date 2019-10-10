import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ItemUserComponent } from './item-user/item-user.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [AdminComponent, ItemUserComponent],
  imports: [
    BsDatepickerModule.forRoot(), 
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,                          
    ReactiveFormsModule  ,
    CommonModule
  ],
 
})
export class AdminModule { }
