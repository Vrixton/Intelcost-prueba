import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { NgbCarousel } from "@ng-bootstrap/ng-bootstrap";
import { ImagesService } from "../../services/images/images.service";
import { LoaderService } from "../../services/loader/loader.service";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent implements OnInit {
  @Input() category: string = "";
  images: any;
  page: number = 1;
  textSearch: string = "";
  interval: number = 10000;
  @ViewChild("carousel", { static: true }) carousel: NgbCarousel;
  constructor(
    private imagesService: ImagesService,
    private loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.imagesService
      .get(this.page, this.category, this.textSearch)
      .subscribe(response => {
        this.images = response.hits;
        this.loaderService.closeLoader();
      });
  }
}
