import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpPageComponent } from 'src/app/common/components/sign-up-page/sign-up-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: HomePageComponent
      },
      {
        path: "list-film",
        loadChildren: "./list-film/list-film.module#ListFilmModule"
      },
      {
        path: "chitietphim",
        loadChildren: "./chitietphim/chitietphim.module#ChitietphimModule"
      },
      { path: "tintuc", loadChildren: "./tintuc/tintuc.module#TintucModule" },
      { path: "sign-up", component: SignUpPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
