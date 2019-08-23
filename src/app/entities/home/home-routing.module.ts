import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "list-film", loadChildren: "./list-film/list-film.module#ListFilmModule" },
      { path: "chitietphim", loadChildren: "./chitietphim/chitietphim.module#ChitietphimModule" },
      { path: "tintuc",loadChildren:"./tintuc/tintuc.module#TintucModule"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }