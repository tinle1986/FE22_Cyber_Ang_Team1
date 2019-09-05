import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharingLayoutsModule } from 'src/app/shared/sharing-layouts/sharing-layouts.module';
import { SignUpPageComponent } from 'src/app/common/components/sign-up-page/sign-up-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [HomeComponent, SignUpPageComponent, HomePageComponent],
  exports: [HomeComponent],
  imports: [
    SharingLayoutsModule,
    HomeRoutingModule,
    CommonModule
  ]
})
export class HomeModule { }
