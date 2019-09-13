import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DatveComponent } from './datve.component';


const routes: Routes = [
    {
        path: "",
        component: DatveComponent,
        children: [
            // { path: "list-film", loadChildren: "./list-film/list-film.module#ListFilmModule" },
            // { path: "chitietphim", loadChildren: "./chitietphim/chitietphim.module#ChitietphimModule" },
            // { path: "datve",loadChildren:"./datve/datve.module#DatveModule"}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DatveRoutingModule { }