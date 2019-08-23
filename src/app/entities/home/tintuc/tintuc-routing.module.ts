import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TintucComponent } from './tintuc.component';


const routes: Routes = [
  {
    path: "",
    component: TintucComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TintucRoutingModule { }