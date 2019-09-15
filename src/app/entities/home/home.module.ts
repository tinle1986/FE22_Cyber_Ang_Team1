import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { SharingLayoutsModule } from "src/app/shared/sharing-layouts/sharing-layouts.module";

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [SharingLayoutsModule, HomeRoutingModule, CommonModule]
})
export class HomeModule {}
