import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import { SearchComponent } from "../pages/search/search.component";

const appRoutes: Routes = [
  {
    path: "",
    component: SearchComponent,
    data: { title: "Search" },
    children: [
      {
        path: ":id",
        component: SearchComponent,
        data: { title: "{{id}}" }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
