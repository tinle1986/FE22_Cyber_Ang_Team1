import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ItemUserComponent } from './item-user/item-user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [AdminComponent, ItemUserComponent],
  imports: [
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,                          
    ReactiveFormsModule  ,
    CommonModule
  ],
 
})
export class AdminModule { }