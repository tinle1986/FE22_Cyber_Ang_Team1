import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EntitiesComponent } from "./entities.component";

const routes: Routes = [
  {
    path: "",
    component: EntitiesComponent,
    children:[
      {
        path:"",
        loadChildren:"./home/home.module#HomeModule"
      },
      {
        path:"book-ticket",
        loadChildren:"./datve/datve.module#DatveModule"
      },
      {
        path:"admin",
        loadChildren:"./admin/admin.module#AdminModule"
      },
    ]
    // children: [
    //   //Trang Home
    //   {
    //     path: "",
    //     loadChildren: "./home/home.module#HomeModule"
    //   },
    //   //Trang Admin
    //   {
    //     path: "admin",
    //     loadChildren: "./admin/admin.module#AdminModule"
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitiesRoutingModule {}