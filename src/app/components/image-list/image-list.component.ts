import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from "@angular/core";
import { ImagesService } from "../../services/images/images.service";
import { LoaderService } from "../../services/loader/loader.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-image-list",
  templateUrl: "./image-list.component.html",
  styleUrls: ["./image-list.component.scss"]
})
export class ImageListComponent implements OnInit, OnChanges {
  images: any;
  page: number = 1;
  maxPage: number;
  @Input() category: string = "";
  @Input() textSearch: string = "";

  constructor(
    private imagesService: ImagesService,
    private loaderService: LoaderService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.category) {
        this.category = params.category;
        this.imagesService
          .get(this.page, this.category, this.textSearch)
          .subscribe(response => {
            this.maxPage = Math.ceil(response.totalHits / response.hits.length);
            this.images = response.hits;
            this.loaderService.closeLoader();
          });
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("aqui debe hacer el peo");
    if (changes.textSearch) {
      this.getResults(this.page, this.category, this.textSearch);
    }
  }

  getResults(page, category, text) {
    this.page = page;
    this.imagesService.get(this.page, category, text).subscribe(response => {
      this.images = response.hits;
      this.loaderService.closeLoader();
    });
  }
}
