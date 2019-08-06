import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListFilmComponent } from './list-film.component';


const routes: Routes = [
  {
    path: "",
    component: ListFilmComponent,
    children: [
      { path: "now-playing", loadChildren: "./list-film-np/list-film-np.module#ListFilmNPModule" },
      { path: "coming-soon", loadChildren: "./list-film-cs/list-film-cs.module#ListFilmCsModule" }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListFilmRoutingModule { }