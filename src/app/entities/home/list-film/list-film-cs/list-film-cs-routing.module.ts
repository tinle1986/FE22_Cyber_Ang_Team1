import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListFilmCsComponent } from './list-film-cs.component';




const routes: Routes = [
    {path:"",component:ListFilmCsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListFilmCsRoutingModule { }