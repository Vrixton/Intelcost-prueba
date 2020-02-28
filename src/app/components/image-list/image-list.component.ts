import { Component, Input, OnInit } from "@angular/core";
import { ImagesService } from "../../services/images/images.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-image-list",
  templateUrl: "./image-list.component.html",
  styleUrls: ["./image-list.component.scss"]
})
export class ImageListComponent implements OnInit {
  images: any;
  page: number = 1;
  @Input() category: string = "";

  constructor(
    private imagesService: ImagesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.category) {
        this.category = params.category;
        this.imagesService.get(this.page, this.category).subscribe(response => {
          this.images = response.hits;
        });
      }
    });
  }

  getResults(page, category) {
    this.page = page;
    this.imagesService.get(this.page, category).subscribe(response => {
      this.images = response.hits;
    });
  }
}
