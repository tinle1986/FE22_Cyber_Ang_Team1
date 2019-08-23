import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChitietphimComponent } from './chitietphim.component';


const routes: Routes = [
  {
    path: "",
    component: ChitietphimComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChitietphimRoutingModule { }