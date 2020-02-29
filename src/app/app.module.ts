import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "../app/configs/app-routing.module";
import { AppComponent } from "./app.component";
import { SearchComponent } from "./pages/search/search.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { MenuComponent } from "./components/menu/menu.component";
import { ImageListComponent } from "./components/image-list/image-list.component";
import { ImageCardComponent } from "./components/image-card/image-card.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { PreviewImageComponent } from "./components/preview-image/preview-image.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchBarComponent,
    MenuComponent,
    ImageListComponent,
    ImageCardComponent,
    LoaderComponent,
    CarouselComponent,
    PreviewImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
