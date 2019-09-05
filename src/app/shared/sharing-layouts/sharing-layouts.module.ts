import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./../../layouts/header/header.component";
import { FooterComponent } from "./../../layouts/footer/footer.component";
import { Carousel01Module } from "src/app/layouts/carousel01/carousel01.module";
import { Carousel01Component } from "src/app/layouts/carousel01/carousel01.component";
import { Carousel02Module } from "src/app/layouts/carousel02/carousel02.module";
import { Carousel02Component } from "src/app/layouts/carousel02/carousel02.component";
import { Carousel03Component } from "src/app/layouts/carousel03/carousel03.component";
import { Carousel03Module } from "src/app/layouts/carousel03/carousel03.module";
import { FormsModule } from '@angular/forms';
import { HeaderModule } from 'src/app/layouts/header/header.module';
@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    Carousel01Component,
    Carousel02Component,
    Carousel03Component
  ],
  imports: [CommonModule, Carousel01Module, Carousel02Module, Carousel03Module, FormsModule, HeaderModule]
})
export class SharingLayoutsModule {}
