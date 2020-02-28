import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "../app/configs/app-routing.module";
import { AppComponent } from "./app.component";
import { SearchComponent } from "./pages/search/search.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { MenuComponent } from "./components/menu/menu.component";
import { ImageListComponent } from "./components/image-list/image-list.component";
import { ImageCardComponent } from './components/image-card/image-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchBarComponent,
    MenuComponent,
    ImageListComponent,
    ImageCardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
