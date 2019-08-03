import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListFilmNPComponent } from './list-film-np.component';



const routes: Routes = [
    {path:"",component:ListFilmNPComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListFilmNPRoutingModule { }